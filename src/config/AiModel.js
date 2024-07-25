import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = "AIzaSyA4Ae0nSwma8L85Ng5CB9zQosCTlWUI7Vg"
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
}

export const AiChatSession = model.startChat({
  generationConfig,
  /* safetySettings, */
  history: [],
})
