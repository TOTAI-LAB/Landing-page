import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Sidebar } from '../Sidebar/Sidebar';

interface Message {
  id: number;
  content: string;
  isBot: boolean;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      content: "Welcome to ChainGPT! I'm your AI assistant specialized in blockchain, cryptocurrency, and Web3 technology. How can I help you today?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, 
      { id: Date.now(), content: input, isBot: false },
      { 
        id: Date.now() + 1, 
        content: "I'm analyzing your blockchain-related query. This is a demo response showcasing the interface.", 
        isBot: true 
      }
    ]);
    setInput('');
  };

  return (
    <div className="flex-1 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#0A0A0A]">
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map(message => (
            <ChatMessage
              key={message.id}
              content={message.content}
              isBot={message.isBot}
            />
          ))}
        </div>
        <ChatInput
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}