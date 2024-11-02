import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onLaunchApp: () => void;
}

export function MobileMenu({ isOpen, onLaunchApp }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#111111] border-b border-gray-800">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="#features" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Features</a>
        <a href="#solutions" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Solutions</a>
        <a href="#pricing" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Pricing</a>
        <a href="#docs" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Documentation</a>
        <button 
          onClick={onLaunchApp}
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors"
        >
          Launch App
        </button>
      </div>
    </div>
  );
}