import { Dayjs } from "dayjs";
import { RoomsType } from "./data";

export interface LoginFormType {
  login: string;
  password: string | number;
}

export interface ContactFormType {
  firstname?: string;
  lastname?: string;
  phonenumber?: number;
  email?: string;
}

export type RegisterFormType = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export interface ReservationDetailsType {
  id?: string | number;
  start_date: string | null | Dayjs | Dayjs[];
  end_date: string | null | Dayjs | Dayjs[];
  guest_number: string | number;
  breakfast: boolean;
  rooms_id: number | string;
  rooms: RoomsType;
}
