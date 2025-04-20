import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import axios from 'axios';
import './styles.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
<<<<<<< HEAD

  const sendMessage = async (text) => {
    if (isLoading) return; // блокируем дубли

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true); // Блокируем ввод
=======
  const [hasStarted, setHasStarted] = useState(false); // Новое состояние для старта чата

  const startChat = () => {
    setHasStarted(true);
    setMessages([{ sender: 'ai', text: 'Hi! I\'m JSON-AI. How can I help you with your data today?' }]);
  };

  const sendMessage = async (text) => {
    if (isLoading) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
>>>>>>> 7845384 (Обновлён дизайн)

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
<<<<<<< HEAD
      setIsLoading(false); // Разблокируем
    }
  };

  return (
    <div className="app-container">
    <div className="chat-header">
  <h1 className="chat-title">AI Schema Builder</h1>
    </div>
=======
      setIsLoading(false);
    }
  };

  if (!hasStarted) {
    return (
      <div className="welcome-screen">
        <div className="welcome-container">
          <div className="welcome-card">
          <h1>Hi! Meet <span className="gradient-text">JSON-AI</span></h1>
            <p>Let's make working with data easier and faster</p>
            <button onClick={startChat} className="start-button">
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
>>>>>>> 7845384 (Обновлён дизайн)
      <ChatWindow messages={messages} />
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
