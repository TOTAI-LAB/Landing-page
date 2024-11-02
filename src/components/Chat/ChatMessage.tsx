import React from 'react';
import { Bot } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
}

export function ChatMessage({ content, isBot }: ChatMessageProps) {
  return (
    <div className={`flex items-start space-x-3 ${isBot ? 'bg-[#111111]' : ''} p-4 rounded-lg max-w-3xl mx-auto`}>
      {isBot ? (
        <Bot className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
      ) : (
        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-1 flex-shrink-0">
          U
        </div>
      )}
      <div className="flex-1">
        <p className="text-gray-200 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}