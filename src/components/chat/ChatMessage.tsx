import React from 'react';
import { User, Bot } from 'lucide-react';
import type { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center
        ${isUser ? 'bg-amber-100' : 'bg-amber-600'}
      `}>
        {isUser ? (
          <User className="w-4 h-4 text-amber-600" />
        ) : (
          <Bot className="w-4 h-4 text-white" />
        )}
      </div>
      <div className={`
        max-w-[80%] p-3 rounded-lg
        ${isUser ? 'bg-amber-100' : 'bg-white'}
      `}>
        <p className="text-amber-900">{message.content}</p>
      </div>
    </div>
  );
};