
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function getDishDetails(dishName) {
  try {
    const model = genAI.getGenerativeModel({model: "models/gemini-2.5-flash" });

    const prompt = `
For the dish or ingredients "${dishName}", provide:
1. Time needed to prepare and cook (in minutes)
2. A complete list of ingredients with quantity
3. A step-by-step recipe
4. Approximate nutrition facts per serving (calories, protein, carbs, fat)
 Format the output with proper line breaks, section headers, and visual clarity. Avoid long paragraphs. Make it visually engaging and easy to scan for a casual user. Use emojis or formatting (like bold or bullets) to improve readability.

`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
}
