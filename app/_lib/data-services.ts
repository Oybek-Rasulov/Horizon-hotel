import { RoomsType } from "../_types/data";
import { supabase } from "./supabase";

export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    throw new Error("Rooms could not be loaded");
  }

  return rooms;
}

export async function getRoom(id: number | string) {
  console.log(id);

  const { data: room, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", String(id));

  if (error) {
    throw new Error("Room could not be loaded", error);
  }

  return room as RoomsType[];
}
