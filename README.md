# 🧠 AI Career Chatbot

An AI-powered personal career assistant built with OpenAI, Vite + React, Express.js, and PDF parsing. 

This chatbot simulates a professional answering questions about their background, experience, and career based on real-world data such as a LinkedIn profile and career summary.

## ✨ Features

- 💬 Conversational chatbot powered by OpenAI API
- 🧾 Parses and uses a LinkedIn PDF + text summary as AI context
- ✅ Evaluation engine that uses Grok to assess AI responses
- 🔥 Fast frontend built with React
- ⚡ Backend built with Node.js + Express
- 🌐 CORS-enabled API for frontend-backend communication

### 🧪 Evaluation Engine
After every AI response, a second Grok-4 model evaluates the assistant's reply against expected tone, relevance, and professionalism using a Joi JSON schema validator.

## 📦 Tech Stack

| Layer      | Tech                                |
|------------|-------------------------------------|
| Frontend   | React           |
| Backend    | Node.js, Express.js, pdf-parse      |
| AI Models  | OpenAI (GPT-4.1-mini), xAI Grok-4   |
| Evaluation | Custom evaluator with JSON schema   |
| Build Tools| PostCSS, ESLint                     |

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ai-career-chatbot.git
cd ai-career-chatbot
```
### 2. Add Profile and Summary
Download your LinkedIn profile as PDF and add it to the server folder as "Profile.pdf"
Create a summary.txt file in the server folder and write a little bit about yourself and interests

### 3. Set Up Environment Variables
Create a .env file in the root of the backend directory:

OPENROUTER_API_KEY=your_openrouter_api_key

### 4. Install Dependencies
✨ Backend (Server folder)
 > cd server
 > npm install

✨ Client (Client folder)
 > cd client
 > npm install

### 5. Start the App
Run client and server simultaneously

Server:
> npm run dev

Client: 
> npm run dev

### 6. Enjoy!









