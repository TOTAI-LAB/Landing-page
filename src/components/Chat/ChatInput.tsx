import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, setInput, onSubmit }: ChatInputProps) {
  return (
    <div className="border-t border-gray-800 bg-[#111111] p-4">
      <form onSubmit={onSubmit} className="max-w-3xl mx-auto relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about blockchain and crypto..."
          className="w-full bg-[#1A1A1A] text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400 p-2 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
      <div className="max-w-3xl mx-auto mt-2 text-xs text-gray-500 text-center">
        ChainGPT can make mistakes. Consider checking important information.
      </div>
    </div>
  );
}