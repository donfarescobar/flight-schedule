import React, { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import type { Flight } from '../types';

interface FlightCardProps {
  flight: Flight;
  isCheapest: boolean;
}

const AIRLINE_LOGOS: Record<string, { logo: string, color: string }> = {
  'Singapore Airlines': {
    logo: 'SA',
    color: 'bg-blue-100 text-blue-600'
  },
  'Jetstar': {
    logo: 'J',
    color: 'bg-orange-100 text-orange-600'
  },
  'Cebu Pacific': {
    logo: 'CP',
    color: 'bg-teal-100 text-teal-600'
  },
  'Philippine Airlines': {
    logo: 'PA',
    color: 'bg-red-100 text-red-600'
  },
  'Scoot': {
    logo: 'S',
    color: 'bg-yellow-100 text-yellow-600'
  }
};

export default function FlightCard({ flight, isCheapest }: FlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const airlineInfo = AIRLINE_LOGOS[flight.airline];

  return (
    <div className={`hover:bg-gray-50 transition-colors ${isCheapest ? 'bg-primary-50/50' : ''}`}>
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Airline Logo */}
          <div className="col-span-1">
            <div className={`w-10 h-10 rounded-full ${airlineInfo.color} flex items-center justify-center font-medium`}>
              {airlineInfo.logo}
            </div>
          </div>

          {/* Flight Info Container */}
          <div className="col-span-9 lg:col-span-10">
            {/* Airline Name */}
            <div className="text-sm font-medium text-gray-900 mb-1">{flight.airline}</div>

            {/* Flight Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Times and Route */}
              <div className="flex items-center gap-2">
                <div>
                  <div className="text-sm font-medium">{flight.departureTime}</div>
                  <div className="text-xs text-gray-500">{flight.from}</div>
                </div>
                <div className="text-gray-400">→</div>
                <div>
                  <div className="text-sm font-medium">{flight.arrivalTime}</div>
                  <div className="text-xs text-gray-500">{flight.to}</div>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1 text-gray-500">
                <span className="inline-block w-4 h-4">⏱</span>
                <span className="text-sm">{flight.duration}</span>
              </div>

              {/* Stops */}
              <div className="flex items-center">
                {flight.stops === 0 ? (
                  <span className="text-sm font-medium text-green-600">Nonstop</span>
                ) : (
                  <span className="text-sm text-gray-600">{flight.stops} stop</span>
                )}
              </div>

              {/* Emissions */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{flight.emissions} kg CO₂e</span>
                {flight.emissionsDiff && (
                  <span className={`text-xs ${flight.emissionsDiff < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {flight.emissionsDiff > 0 ? '+' : ''}{flight.emissionsDiff}%
                  </span>
                )}
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <Info className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Price and Expand Section */}
          <div className="col-span-2 lg:col-span-1 flex items-center justify-end gap-2">
            <div className="flex flex-col items-end">
              {isCheapest && (
                <div className="text-xs text-primary-600 font-medium mb-1">Best price</div>
              )}
              <div className="text-base font-bold whitespace-nowrap">SGD&nbsp;{flight.price}</div>
              <div className="text-xs text-gray-500">round trip</div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <div className="pt-4">
            <div className="space-y-4">
              {/* Flight Route Details */}
              <div className="space-y-2">
                <div>
                  <div className="font-medium">{flight.departureTime} · {flight.from}</div>
                  <div className="text-sm text-gray-500">Singapore Changi Airport (SIN)</div>
                </div>
                
                <div className="text-sm text-gray-500">
                  {flight.duration} · {flight.airline}
                </div>

                <div>
                  <div className="font-medium">{flight.arrivalTime} · {flight.to}</div>
                  <div className="text-sm text-gray-500">Ninoy Aquino International Airport (MNL)</div>
                </div>

                {flight.via && (
                  <div className="text-sm text-orange-600">
                    Layover in {flight.via}
                  </div>
                )}
              </div>

              <button className="w-full py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
                Select flight
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}