// src/pages/Messages.tsx
import React from 'react';

const Messages: React.FC = () => {
  return (
    <div className="messages-page p-6">
      <h1 className="text-2xl font-semibold mb-4">Messages</h1>
      <div className="message-list bg-white p-6 rounded-lg shadow-md">
        <div className="message-item flex items-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">Jane Cooper</h2>
            <p className="text-gray-600">Ask CDCR San Quintin...</p>
          </div>
        </div>
        <div className="message-item flex items-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">Jacob Jones</h2>
            <p className="text-gray-600">So yes, the alcohol</p>
          </div>
        </div>
        {/* More messages */}
      </div>
    </div>
  );
};

export default Messages;
