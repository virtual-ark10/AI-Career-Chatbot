import OpenAI from "openai";
import pdf from "pdf-parse";
import fs from 'fs'
import dotenv from "dotenv"
dotenv.config();

//Instantiate OpenAI with required Configs
const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
})



let dataBuffer = fs.readFileSync('Profile.pdf')

pdf(dataBuffer).then((data) => {
    console.log(data.text);
});

