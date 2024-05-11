import { getInstruction, getRole } from "@/lib/prompts";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { v4 } from "uuid";
import {
  ModelType,
  PromptProps,
  TChatMessage,
  useChatSession,
} from "./use-chat-session";

export const useLLM = () => {
  const { getSessionById, addMessageToSession } = useChatSession();

  const preparePrompt = async (props: PromptProps, history: TChatMessage[]) => {
    const messageHistory = history;
    const prompt = ChatPromptTemplate.fromMessages(
      messageHistory?.length > 0
        ? [
            [
              "system",
              "You are {role} Answer user's question based on the following context:",
            ],
            new MessagesPlaceholder("chat_history"),
            ["user", "{input}"],
          ]
        : [
            props?.context
              ? [
                  "system",
                  "You are {role}.  Answer user's question based on the following context: {context}",
                ]
              : ["system", "You are {role}. {type}"],

            ["user", "{input}"],
          ]
    );

    const previousMessageHistory = messageHistory.reduce(
      (acc: (HumanMessage | AIMessage)[], { rawAI, rawHuman }) => [
        ...acc,
        new HumanMessage(rawHuman),
        new AIMessage(rawAI),
      ],
      []
    );

    return await prompt.formatMessages(
      messageHistory?.length > 0
        ? {
            role: getRole(props.role),
            chat_history: previousMessageHistory,
            input: props.query,
          }
        : {
            role: getRole(props.role),
            type: getInstruction(props.type),
            context: props.context,
            input: props.query,
          }
    );
  };

  const runModel = async (props: PromptProps, sessionId: string) => {
    const currentSession = await getSessionById(sessionId);

    if (!props?.query) {
      return;
    }

    const apiKey = "";

    const model = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      openAIApiKey: apiKey,
    });

    const newMessageId = v4();

    const formattedChatPrompt = await preparePrompt(
      props,
      currentSession?.messages || []
    );
    const stream = await model.stream(formattedChatPrompt);

    let streamedMessage = "";

    for await (const chunk of stream) {
      streamedMessage += chunk.content;
    }

    const chatMessage = {
      id: newMessageId,
      model: ModelType.GPT3,
      human: new HumanMessage(props.query),
      ai: new AIMessage(streamedMessage),
      rawHuman: props.query,
      rawAI: streamedMessage,
      props,
    };

    addMessageToSession(sessionId, chatMessage);
  };
  return {
    runModel,
  };
};