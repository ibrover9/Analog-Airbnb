export interface IUser {
  anonymous: boolean;
  id: number;
  username: string;
  email: string;
  roles: string[];
  reservations: Reservation[];
}

export interface HistoryReservations {
  id: number;
  reservations: Reservation[];
}

export interface Reservation {
  id: number;
  hotelId: number;
  from: string;
  to: string;
}
