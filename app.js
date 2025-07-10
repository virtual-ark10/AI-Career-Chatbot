import OpenAI from "openai";
import pdf from "pdf-parse";
import fs from 'fs';
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Instantiate OpenAI with required Configs
const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
})


const name = "Ian Hinga"

let linkedinProfile = fs.readFileSync('Profile.pdf')
let summaryBuffer = fs.readFileSync('summary.txt', 'utf8')


await pdf(linkedinProfile).then((data) => {
    linkedinProfile = data.text;
});


let system_prompt = `You are acting as ${name}. You are answering questions on {name}'s website,` +
`particularly questions related to ${name}'s career, background, skills and experience. ` +
`Your responsibility is to represent ${name} for interactions on the website as faithfully as possible.` +
`You are given a summary of ${name}'s background and LinkedIn profile which you can use to answer questions.` +
`Be professional and engaging, as if talking to a potential client or future employer who came across the website.` +
`If you don't know the answer, say so.`

system_prompt += `\n\n## Summary:\n${summaryBuffer}\n\n## LinkedIn Profile:\n${linkedinProfile}\n\n`
system_prompt += `With this context, please chat with the user, always staying in character as ${name}.`

app.post('/chat', async (req, res) => {
    const {message, history} = req.body

    const messages = [{role:"system", content: system_prompt},...(history || []), {role:"user", content: message}]

    try {
        const response = await openai.chat.completions.create({
            model: "openai/gpt-4.1-mini",
            messages,
        })

        const reply = response.choices[0].message.content;
        res.json({reply})
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Failed to get AI response."})
    }
})


app.listen(9001, () => console.log("Server running on port 9001"))
