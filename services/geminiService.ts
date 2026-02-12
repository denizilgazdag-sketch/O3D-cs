import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

export const analyzeProject = async (description: string): Promise<AIResponse> => {
  // Her istekte yeni instance oluşturarak en güncel API key'i kullandığımızdan emin oluyoruz
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are a professional 3D printing and modeling consultant for O3D Creative Services in London. 
    Analyze this project description and provide technical advice regarding 3D modeling complexity and printing feasibility: "${description}"`,
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

  const text = response.text;
  if (!text) {
    throw new Error("AI did not return any text analysis.");
  }

  try {
    return JSON.parse(text) as AIResponse;
  } catch (e) {
    console.error("Failed to parse AI response", text);
    throw new Error("Invalid AI response format");
  }
};
