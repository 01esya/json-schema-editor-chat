import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import axios from 'axios';
import './styles.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  const sendMessage = async (text) => {
    if (isLoading) return; // блокируем дубли

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true); // Блокируем ввод

    try {
      const res = await axios.post('http://localhost:8000/chat', { message: text });
      const aiMsg = { sender: 'ai', text: res.data.reply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Произошла ошибка при получении ответа 😢' },
      ]);
    } finally {
      setIsLoading(false); // Разблокируем
    }
  };

  return (
    <div className="app-container">
    <div className="chat-header">
  <h1 className="chat-title">AI Schema Builder</h1>
    </div>
      <ChatWindow messages={messages} />
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
