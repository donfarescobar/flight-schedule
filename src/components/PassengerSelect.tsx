import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface PassengerSelectProps {
  passengers: number;
  cabinClass: string;
  onPassengersChange: (count: number) => void;
  onCabinClassChange: (cabin: string) => void;
}

export default function PassengerSelect({ 
  passengers, 
  cabinClass, 
  onPassengersChange, 
  onCabinClassChange 
}: PassengerSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cabinClasses = ['Economy', 'Premium Economy', 'Business', 'First'];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-border rounded-lg text-left flex items-center justify-between group hover:bg-gray-50"
      >
        <div>
          <div className="text-sm text-gray-500">Passengers</div>
          <div className="text-gray-900">{passengers} passenger{passengers !== 1 ? 's' : ''}, {cabinClass}</div>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-border z-20 p-4">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium text-gray-900">Passengers</div>
                  <div className="text-sm text-gray-500">Age 12+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => onPassengersChange(Math.max(1, passengers - 1))}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="w-8 text-center text-gray-900">{passengers}</span>
                  <button 
                    onClick={() => onPassengersChange(Math.min(9, passengers + 1))}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="font-medium text-gray-900 mb-2">Cabin class</div>
              <div className="space-y-2">
                {cabinClasses.map((cabin) => (
                  <button
                    key={cabin}
                    onClick={() => {
                      onCabinClassChange(cabin);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-lg text-left hover:bg-gray-50 ${
                      cabinClass === cabin ? 'bg-primary-50 text-primary-600' : 'text-gray-900'
                    }`}
                  >
                    {cabin}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}