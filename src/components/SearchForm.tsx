import React, { useState } from 'react';
import AirportSelect from './AirportSelect';
import DatePicker from './DatePicker';
import PassengerSelect from './PassengerSelect';
import type { Airport } from '../data/airports';

export default function SearchForm() {
  const [fromAirport, setFromAirport] = useState('Singapore');
  const [toAirport, setToAirport] = useState('');
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('Economy');

  return (
    <div className="bg-surface rounded-xl shadow-glass border border-border p-4 backdrop-blur-sm">
      <div className="flex gap-2 mb-4 overflow-x-auto">
        <button className="px-4 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium whitespace-nowrap">
          Round trip
        </button>
        <button className="px-4 py-1 rounded-full hover:bg-gray-50 text-sm text-gray-600 whitespace-nowrap">
          One way
        </button>
        <button className="px-4 py-1 rounded-full hover:bg-gray-50 text-sm text-gray-600 whitespace-nowrap">
          Multi-city
        </button>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AirportSelect
            value={fromAirport}
            onChange={(airport: Airport) => setFromAirport(`${airport.city}, ${airport.country}`)}
            placeholder="Where from?"
          />
          <AirportSelect
            value={toAirport}
            onChange={(airport: Airport) => setToAirport(`${airport.city}, ${airport.country}`)}
            placeholder="Where to?"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr,1fr,auto] gap-3">
          <div className="grid grid-cols-2 gap-3">
            <DatePicker
              label="Depart"
              date={departDate}
              onDateChange={setDepartDate}
            />
            <DatePicker
              label="Return"
              date={returnDate}
              onDateChange={setReturnDate}
            />
          </div>

          <PassengerSelect
            passengers={passengers}
            cabinClass={cabinClass}
            onPassengersChange={setPassengers}
            onCabinClassChange={setCabinClass}
          />
        </div>
      </div>
    </div>
  );
}