import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBdVVC3xDaTT4Wcg-S7fHvX5OjCZWwTDzU" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hi from Gemini 2.5 Flash to AVPN Wave 1 Batch 3 Students!",
  });
  console.log(response.text);
}

main();