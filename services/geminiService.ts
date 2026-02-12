
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeProject = async (description: string): Promise<AIResponse> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this 3D printing project description and provide technical advice: "${description}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analysis: {
            type: Type.STRING,
            description: "A professional design analysis and printing feasibility advice."
          },
          complexity: {
            type: Type.STRING,
            description: "Complexity level: Low, Medium, or High."
          },
          suggestedMaterials: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of recommended materials for this specific use case."
          }
        },
        required: ["analysis", "complexity", "suggestedMaterials"]
      }
    }
  });

  const text = response.text || "{}";
  return JSON.parse(text) as AIResponse;
};
