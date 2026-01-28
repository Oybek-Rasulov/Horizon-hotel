import { create } from "zustand";
import { FilterState, RoomsType } from "../_types/data";

export const useFilterRoom = create<FilterState>((set) => ({
  roomsData: null,
  isActive: "all",
  isSelectActive: false,
  resetRooms: function (rooms: RoomsType[]) {
    set({ roomsData: rooms });
  },
  storeRooms: function (rooms: RoomsType[]) {
    set((state) => ({ roomsData: state.roomsData, isActive: "all" }));
  },
  filteredByStatus: function (rooms: RoomsType[]) {
    set((state) => ({
      roomsData: state.roomsData
        ? state.roomsData?.filter(
            (room: RoomsType) => room.status?.toLowerCase() === "available",
          )
        : [],
      isActive: "status",
    }));
  },
  filteredByPrice: () => {
    set((state) => ({
      roomsData: state.roomsData
        ? [...state.roomsData].sort(
            (a, b) => (a.price_per_night ?? 0) - (b.price_per_night ?? 0),
          )
        : [],
      isActive: "price",
    }));
  },

  filteredByClass: function (value: string, rooms: RoomsType[]) {
    if (value === "all") {
      set({ roomsData: rooms, isSelectActive: false });
    } else {
      set({
        roomsData: rooms?.filter(
          (room: RoomsType) => room.level.toLowerCase() === value.toLowerCase(),
        ),
        isSelectActive: true,
      });
    }
  },
}));
