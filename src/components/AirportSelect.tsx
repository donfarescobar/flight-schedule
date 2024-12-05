import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { AIRPORTS } from '../data/airports';
import type { Airport } from '../data/airports';

interface AirportSelectProps {
  value: string;
  onChange: (airport: Airport) => void;
  placeholder: string;
}

export default function AirportSelect({ value, onChange, placeholder }: AirportSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const selectedAirport = AIRPORTS.find(airport => 
    `${airport.city}, ${airport.country}` === value || airport.code === value
  );

  const filteredAirports = AIRPORTS.filter(airport => {
    const searchStr = search.toLowerCase();
    return (
      airport.city.toLowerCase().includes(searchStr) ||
      airport.country.toLowerCase().includes(searchStr) ||
      airport.code.toLowerCase().includes(searchStr)
    );
  });

  return (
    <div className="relative">
      <div
        className="w-full px-3 py-2 border border-gray-200 rounded-lg 
        focus-within:ring-2 focus-within:ring-primary-500 bg-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={placeholder}
            value={isOpen ? search : selectedAirport ? `${selectedAirport.city}, ${selectedAirport.country}` : ''}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400"
            onFocus={() => setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => {
              setIsOpen(false);
              setSearch('');
            }}
          />
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 
            rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
            {filteredAirports.map((airport) => (
              <button
                key={airport.code}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                onClick={() => {
                  onChange(airport);
                  setIsOpen(false);
                  setSearch('');
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">{airport.code}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{airport.city}, {airport.country}</div>
                  <div className="text-sm text-gray-500">{airport.name}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}