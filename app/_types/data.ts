import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type RoomsType = {
  id?: number;
  created_at?: Timestamp;
  name?: string;
  room_number?: number;
  capacity?: number;
  price_per_night: number;
  status?: string;
  description?: string;
  updated_at?: Timestamp;
  image_url?: string;
  gallery_images?: Array<string>;
  level: string;
};

export type FilterState = {
  roomsData?: RoomsType[] | null;
  isActive?: string;
  isSelectActive?: boolean;
  resetRooms: (rooms: RoomsType[]) => void;
  filteredByStatus: (rooms: RoomsType[]) => void;
  storeRooms: (rooms: RoomsType[]) => void;
  filteredByPrice: (rooms: RoomsType[]) => void;
  filteredByClass: (value: string, rooms: RoomsType[]) => void;
};

export type roomDataType = {
  rooms: RoomsType[];
};

export type RegisterDataType = {
  firstName?: string;
  lastName?: string;
  phone?: string | number;
  login?: string;
  password?: string | number;
};

