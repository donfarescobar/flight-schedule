import React from 'react';
import { Plane } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary-100 to-primary-200">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Plane className="w-5 h-5 text-primary-500" />
          <span className="text-primary-600 font-medium">Find your next adventure</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Discover Amazing Flight Deals
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Compare thousands of flights and find the best price for your next trip
        </p>
      </div>
    </div>
  );
}