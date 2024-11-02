import React from 'react';
import { MessageSquare, Settings, ChevronDown } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-[#111111] border-r border-gray-800">
      <div className="p-4">
        <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 w-full transition-colors">
          <MessageSquare className="w-4 h-4" />
          <span>New Chat</span>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Recent Chats</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="hover:bg-[#1A1A1A] p-2 rounded-lg cursor-pointer text-sm transition-colors">
            Blockchain Analysis
          </div>
          <div className="hover:bg-[#1A1A1A] p-2 rounded-lg cursor-pointer text-sm transition-colors">
            Smart Contract Review
          </div>
          <div className="hover:bg-[#1A1A1A] p-2 rounded-lg cursor-pointer text-sm transition-colors">
            Market Insights
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center space-x-2 hover:bg-[#1A1A1A] w-full p-2 rounded-lg text-gray-400 hover:text-white transition-colors">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}