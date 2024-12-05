import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import FlightFilters from './components/FlightFilters';
import FlightCard from './components/FlightCard';
import PopularDestinations from './components/PopularDestinations';

const FLIGHTS = [
  {
    id: 'SQ123',
    airline: 'Singapore Airlines',
    departureTime: '9:20 AM',
    arrivalTime: '12:55 PM',
    duration: '3 hr 35 min',
    price: 299,
    stops: 0,
    emissions: 165,
    emissionsDiff: -12,
    from: 'SIN',
    to: 'MNL',
  },
  {
    id: 'JQ456',
    airline: 'Jetstar',
    departureTime: '6:55 AM',
    arrivalTime: '11:05 AM',
    duration: '4 hr 10 min',
    price: 209,
    stops: 0,
    emissions: 189,
    from: 'SIN',
    to: 'MNL',
  },
  {
    id: '5J789',
    airline: 'Cebu Pacific',
    departureTime: '1:10 AM',
    arrivalTime: '5:00 AM',
    duration: '3 hr 50 min',
    price: 232,
    stops: 0,
    emissions: 164,
    emissionsDiff: -13,
    from: 'SIN',
    to: 'MNL',
  },
  {
    id: 'PR321',
    airline: 'Philippine Airlines',
    departureTime: '11:45 AM',
    arrivalTime: '5:20 PM',
    duration: '5 hr 35 min',
    price: 285,
    stops: 1,
    emissions: 195,
    emissionsDiff: +5,
    from: 'SIN',
    to: 'MNL',
    via: 'CEB',
  },
  {
    id: 'TR654',
    airline: 'Scoot',
    departureTime: '2:30 PM',
    arrivalTime: '6:15 PM',
    duration: '3 hr 45 min',
    price: 219,
    stops: 0,
    emissions: 175,
    from: 'SIN',
    to: 'MNL',
  },
];

export default function App() {
  const cheapestPrice = Math.min(...FLIGHTS.map(flight => flight.price));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 space-y-6 pb-12">
        <div className="relative -mt-20">
          <SearchForm />
        </div>
        <FlightFilters />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-4 flex items-center justify-between border-b border-gray-200">
            <div className="font-medium">Best</div>
            <div className="flex items-center gap-2">
              <span className="text-primary-600">Cheapest</span>
              <span className="text-sm text-gray-500">from</span>
              <span className="font-medium whitespace-nowrap">SGD&nbsp;{cheapestPrice}</span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {FLIGHTS.map((flight) => (
              <FlightCard 
                key={flight.id} 
                flight={flight} 
                isCheapest={flight.price === cheapestPrice}
              />
            ))}
          </div>
        </div>

        <PopularDestinations />
      </main>
    </div>
  );
}