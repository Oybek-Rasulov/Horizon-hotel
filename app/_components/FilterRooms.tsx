"use client";

import { useEffect } from "react";
import { roomDataType } from "../_types/data";
import { useFilterRoom } from "../store/useFilterRooms";
import { Select } from "@headlessui/react";
import { Search } from "lucide-react";

export function FilterRooms({ rooms }: roomDataType) {
  const filterByStatus = useFilterRoom((state) => state.filteredByStatus);
  const filteredByPrice = useFilterRoom((state) => state.filteredByPrice);
  const storeRooms = useFilterRoom((state) => state.storeRooms);
  const resetRooms = useFilterRoom((state) => state.resetRooms);
  const isActive = useFilterRoom((state) => state.isActive);

  useEffect(() => {
    resetRooms(rooms);
  }, [rooms]);

  return (
    <div className="flex p-0 bg-[#1B2631] rounded border">
      <button
        type="button"
        className={`text-white rounded-tl rounded-bl ${isActive === "all" ? "bg-[#141c24]" : ""}`}
        onClick={() => storeRooms(rooms)}
      >
        All
      </button>
      <button
        type="button"
        className={`text-white ${isActive === "status" ? "bg-[#141c24]" : ""}`}
        onClick={() => filterByStatus(rooms)}
      >
        Status
      </button>
      <button
        type="button"
        className={`text-white rounded-tr rounded-br ${isActive === "price" ? "bg-[#141c24]" : ""}`}
        onClick={() => filteredByPrice(rooms)}
      >
        Price
      </button>
    </div>
  );
}

export default function FilterByClass({ rooms }: roomDataType) {
  const filteredByClass = useFilterRoom((state) => state.filteredByClass);
  const storeRooms = useFilterRoom((state) => state.storeRooms);
  const isSelectActive = useFilterRoom((state) => state.isSelectActive);

  function handleSelect(value: string) {
    storeRooms(rooms);
    filteredByClass(value, rooms);
  }

  return (
    <Select
      name="status"
      aria-label="Project status"
      className={`rounded border py-2.25 px-2 bg-[#1B2631] focus:outline-none ${isSelectActive ? "bg-[#141C24]" : ""}`}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="all">All</option>
      <option value="standard">Standard</option>
      <option value="premium">Premium</option>
      <option value="luxury">Luxury</option>
    </Select>
  );
}

