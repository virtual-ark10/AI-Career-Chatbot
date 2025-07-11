import { useState } from "react";
import './App.css'

function App() {
    const [history, setHistory] = useState([]);
    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('')
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        console.log("sending message")
        setLoading(true)
        const response = await fetch('http://localhost:9001/chat', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({message, history})
        })

        const data = await response.json();

        console.log("Reply from server:", data);


        const newHistory = [
            ...history,
            {role: 'user', content:message},
            {role: 'assistant', content: data.reply}
        ]

        setHistory(newHistory);
        setReply(data.reply)
        setMessage('')
        setLoading(false)
    };

    return(
        <div className="App">
            <h1>Ask Hinga</h1>
            <div className="chat-box">
                {
                    history.map((msg,idx) => (
                        <p key={idx}>
                            <strong>{msg.role}:</strong>{msg.content}
                        </p>
                    ))
                }
            </div>

            <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <button onClick={sendMessage} disabled={loading}>
                {loading ? 'Thinking...' : 'Send'}
            </button>
            
        
        </div>
    )
}

export default App