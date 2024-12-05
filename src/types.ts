export interface Flight {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
  emissions: number;
  emissionsDiff?: number;
  from: string;
  to: string;
  via?: string;
}

export interface SearchFilters {
  stops: number[];
  priceRange: [number, number];
  airlines: string[];
}