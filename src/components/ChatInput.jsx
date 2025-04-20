import React, { useState } from 'react';
<<<<<<< HEAD

const ChatInput = ({ onSend, isLoading }) => {
    const [input, setInput] = useState('');
  
    const handleSubmit = () => {
      if (input.trim() !== '' && !isLoading) {
        onSend(input);
        setInput('');
      }
    };
  
    return (
      <div className="chat-input">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          disabled={isLoading} // блокировка во время запроса
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? '...' : 'Отправить'}
        </button>
      </div>
    );
  };
=======
import sendIcon from '../assets/send.png';
import restartIcon from '../assets/restart.png';
function ChatInput({ onSend, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() !== '' && !isLoading) {
      onSend(input);
      setInput('');
    }
  };

    const handleRestartSession = () => {
    console.log('Session restarted');
    // Здесь будет логика сброса
  };

  return (
    <div className="chat-input-wrapper">
      {/* Кнопка рестарта */}
      <button
        className="restart-button"
        onClick={handleRestartSession}
        title="Restart"
      >
        <img
          src={restartIcon}
          alt="Restart"
          className="restart-icon"
        />
      </button>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Write a prompt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          disabled={isLoading}
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          <img
            src={sendIcon}
            alt="Send"
            className="send-icon"
          />
        </button>
      </div>
    </div>
  );
}
>>>>>>> 7845384 (Обновлён дизайн)

export default ChatInput;
