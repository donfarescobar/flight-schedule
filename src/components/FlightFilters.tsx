import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FlightFilters() {
  return (
    <div className="-mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <button className="flex items-center gap-1 px-4 py-1.5 bg-primary-50 text-primary-600 border border-primary-100 rounded-full hover:bg-primary-100 whitespace-nowrap transition-colors">
          <span>All filters</span>
        </button>
        {['Stops', 'Airlines', 'Bags', 'Price', 'Times', 'Emissions', 'Connecting airports', 'Duration'].map((filter) => (
          <button
            key={filter}
            className="flex items-center gap-1 px-4 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 whitespace-nowrap text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>{filter}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
}