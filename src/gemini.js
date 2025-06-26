
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCYTYnTpDyLePCG9ODmppkmjSZkSkJAYJA"; // okay for dev

const genAI = new GoogleGenerativeAI(API_KEY);

export async function getDishDetails(dishName) {
  try {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash" });

    const prompt = `
For the dish "${dishName}", provide:
1. Time needed to prepare and cook (in minutes)
2. A complete list of ingredients with quantity
3. A step-by-step recipe
4. Approximate nutrition facts per serving (calories, protein, carbs, fat)
Format the output with proper headings and line breaks.

`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
}
