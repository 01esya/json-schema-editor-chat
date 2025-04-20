import React from 'react';

const Message = ({ sender, text }) => {
  return (
    <div className={`message ${sender === 'user' ? 'user' : 'ai'}`}>
      <div className="bubble">
<<<<<<< HEAD
        <strong>{sender === 'user' ? 'You' : 'AI'}:</strong> {text}
=======
         {text}
>>>>>>> 7845384 (Обновлён дизайн)
      </div>
    </div>
  );
};

export default Message;
