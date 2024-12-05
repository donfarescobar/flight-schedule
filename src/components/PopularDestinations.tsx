import React from 'react';

const DESTINATIONS = [
  {
    city: 'Tokyo',
    country: 'Japan',
    price: 476,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80',
    dates: 'Feb 9 — Feb 17',
    duration: '6 hr 45 min',
    type: 'Nonstop',
  },
  {
    city: 'Seoul',
    country: 'South Korea',
    price: 311,
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80',
    dates: 'Feb 27 — Mar 6',
    duration: '6 hr',
    type: '1 stop',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    price: 469,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80',
    dates: 'Mar 6 — Mar 15',
    duration: '7 hr 40 min',
    type: 'Nonstop',
  },
  {
    city: 'New York',
    country: 'United States',
    price: 1006,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80',
    dates: 'Feb 1 — Feb 10',
    duration: '29 hr',
    type: '1 stop',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Popular destinations from Singapore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DESTINATIONS.map((destination) => (
          <div
            key={destination.city}
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={destination.image}
                alt={destination.city}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{destination.city}</h3>
                <p className="text-sm text-gray-200">{destination.country}</p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">from</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  SGD {destination.price}
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {destination.dates}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{destination.type}</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}