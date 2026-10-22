// lib/llm.js
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) console.warn('GEMINI_API_KEY missing - chat will fail');
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const model = genAI ? genAI.getGenerativeModel({
    model: 'gemini-3.8-flash', generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
        responseMimeType: 'application/json'
    }
}) : null;

export async function askLLM(prompt) {
    if (!model) throw new Error('Gemini not configured - missing GEMINI_API_KEY');
    const result = await model.generateContent(prompt);
    return result.response.text();
}