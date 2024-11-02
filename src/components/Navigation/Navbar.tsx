import React from 'react';
import { Sparkles, Github, Twitter, Menu } from 'lucide-react';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  onLaunchApp: () => void;
}

export function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen, onLaunchApp }: NavbarProps) {
  return (
    <nav className="border-b border-gray-800 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">ChainGPT</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Features</a>
                <a href="#solutions" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Solutions</a>
                <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#docs" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Documentation</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <button 
              onClick={onLaunchApp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Launch App
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}