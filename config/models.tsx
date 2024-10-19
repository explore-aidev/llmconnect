import { TModelItem } from "@/lib/types";

export const providers = [
  "emilio", // Only Emilio models are now used
] as const;

export const allPlugins = [
  "web_search",
  "image_generation",
  "memory",
  "webpage_reader",
  "py_interpreter",
  "bar_chart",
  "pie_chart",
  "line_chart",
];

export const models: TModelItem[] = [
  {
    name: "Emilio Pro 1.5 (Latest)", // Updated to Emilio
    key: "gemini-1.5-pro-latest",
    isNew: false,
    tokens: 200000,
    vision: true,
    description: "Best for complex tasks",
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio", // Updated the provider
  },
  {
    name: "Emilio Flash 1.5 (Latest)", // Updated to Emilio
    key: "gemini-1.5-flash-latest",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    vision: true,
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio", // Updated the provider
  },
  {
    name: "Emilio Pro 1.5 (002)", // Added version 002
    key: "gemini-1.5-pro-002",
    isNew: false,
    tokens: 200000,
    vision: true,
    description: "Best for complex tasks",
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio", // Updated the provider
  },
  {
    name: "Emilio Flash 1.5 (002)", // Added version 002
    key: "gemini-1.5-flash-002",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    vision: true,
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio", // Updated the provider
  },
  {
    name: "Emilio Pro 1.5 (001)", // Added previous version
    key: "gemini-1.5-pro-001",
    isNew: false,
    tokens: 200000,
    vision: true,
    description: "Best for complex tasks",
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio", // Updated the provider
  },
  {
    name: "Emilio Flash 1.5 (001)", // Added previous version
    key: "gemini-1.5-flash-001",
    isNew: false,
    tokens: 200000,
    description: "Best for complex tasks",
    vision: true,
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio", // Updated the provider
  },
  {
    name: "Emilio Flash 8B", // Updated to Emilio
    key: "gemini-1.5-flash-8b",
    isNew: false,
    tokens: 200000,
    description: "High volume and lower intelligence tasks",
    vision: true,
    maxOutputTokens: 8192,
    plugins: [],
    icon: "emilio", // Updated the icon to match
    provider: "emilio",
  },
  {
    name: "Emilio 1.0 Pro", // Updated to Emilio
    key: "gemini-1.0-pro",
    isNew: false,
    tokens: 200000,
    description: "Natural language tasks, multi-turn text and code chat, code generation",
    maxOutputTokens: 4096,
    plugins: [],
    icon: "emilio",
    provider: "emilio",
  },
  {
    name: "Emilio Text Embedding", // Updated to Emilio
    key: "text-embedding-004",
    isNew: false,
    tokens: 200000,
    description: "Text embeddings for measuring the relatedness of text strings",
    maxOutputTokens: 4096,
    plugins: [],
    icon: "emilio",
    provider: "emilio",
  },
  {
    name: "Emilio AQA", // Updated to Emilio
    key: "aqa",
    isNew: false,
    tokens: 200000,
    description: "Best for advanced question answering tasks",
    maxOutputTokens: 4096,
    plugins: [],
    icon: "emilio",
    provider: "emilio",
  },
];