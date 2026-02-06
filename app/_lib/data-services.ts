import { message } from "antd";
import { RoomsType } from "../_types/data";
import { ReservationDetailsType } from "../_types/form";
import { User } from "./auth";
import { createSupabaseClient } from "./supabase";

const supabase = createSupabaseClient();

// Rooms
export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    throw new Error("Rooms could not be loaded");
  }

  return rooms;
}

export async function getRoom(id: number | string) {
  const { data: room, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", String(id));

  if (error) {
    throw new Error("Room could not be loaded", error);
  }

  return room as RoomsType[];
}

export async function reserveRoom(room: ReservationDetailsType) {
  const user = await User();

  const { error } = await supabase
    .from("reservation")
    .insert([{ ...room, user_id: user?.id }])
    .select();

  if (error) {
    throw new Error("Room couldn't be reserved");
  }

  return { message: "Room reserved successfully" };
}

export async function getReservations() {
  const user = await User();

  const { data: reservations, error } = await supabase
    .from("reservation")
    .select(
      `
    *,
    rooms (
      id,
      name,
      price_per_night,
      capacity,
      description,
      gallery_images,
      level
    )
  `,
    )
    .eq("user_id", String(user?.id));

  if (error) {
    throw new Error("Reservations couldn't fetched");
  }

  return reservations;
}

export async function deleteReservation(id: string | number) {
  const { error } = await supabase.from("reservation").delete().eq("id", id);

  if (error) {
    throw new Error("Couldn't delete your reservation");
  }

  return { message: "Reservations successfully deleted" };
}
