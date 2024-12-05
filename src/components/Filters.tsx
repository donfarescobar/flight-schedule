import React from 'react';
import { Filter, Plane, DollarSign } from 'lucide-react';
import type { SearchFilters } from '../types';

interface FiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  return (
    <div className="glass-card rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 
          flex items-center justify-center">
          <Filter className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold gradient-text">Filters</h2>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Plane className="w-4 h-4 text-blue-600" />
            <h3 className="font-medium text-gray-700">Stops</h3>
          </div>
          <div className="space-y-3">
            {['Non-stop', '1 stop', '2+ stops'].map((stop, index) => (
              <label key={stop} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.stops.includes(index)}
                    onChange={(e) => {
                      const newStops = e.target.checked
                        ? [...filters.stops, index]
                        : filters.stops.filter((s) => s !== index);
                      onFilterChange({ ...filters, stops: newStops });
                    }}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded transition-colors duration-200
                    peer-checked:border-blue-500 peer-checked:bg-blue-500 group-hover:border-blue-400"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white scale-0
                    peer-checked:scale-100 transition-transform duration-200">✓</div>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {stop}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <h3 className="font-medium text-gray-700">Price Range</h3>
          </div>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    priceRange: [Number(e.target.value), filters.priceRange[1]],
                  })
                }
                placeholder="Min"
                className="search-input pl-8"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            </div>
            <div className="relative flex-1">
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    priceRange: [filters.priceRange[0], Number(e.target.value)],
                  })
                }
                placeholder="Max"
                className="search-input pl-8"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}