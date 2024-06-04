export interface MovieInformationHousing {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  stars: number;
  pricePerDay: number;
  imageUrl: string;
  reservations: Reservation[];
  offers: Offers;
  createdAt: string;
  address: Address;
}

interface Reservation {
  id: number;
  hotelId: number;
  from: Date;
  to: Date;
}

interface Offers {
  hasWifi: boolean;
  hasTv: boolean;
  hasKitchen: boolean;
  hasWasher: boolean;
  hasFreeParking: boolean;
  hasPaidParking: boolean;
  hasConditioner: boolean;
  hasWorkingPlace: boolean;
}

interface Address {
  continent: string;
  country: string;
  city: string;
  address: string;
}
