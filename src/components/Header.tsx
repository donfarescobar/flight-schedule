import React from 'react';
import { Menu, Plane } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-primary-500" />
            <span className="text-[20px] font-medium text-gray-900">
              Flight Schedule UI
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-100"></button>
        </div>
      </div>
    </header>
  );
}