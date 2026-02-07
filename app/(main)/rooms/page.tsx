import FilterByClass, { FilterRooms } from "@/app/_components/FilterRooms";
import { RoomsList } from "@/app/_components/RoomsList";
import { Title } from "@/app/_components/Title";
import { getRooms } from "@/app/_lib/data-services";
import { Suspense } from "react";
import { Spinner } from "@/app/_components/Spinner";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Rooms",
};

export default async function Page() {
  const rooms = await getRooms();

  return (
    <div className="mb-10 px-3">
      <Title className="text-center mb-5 mt-5" color="white">
        Our Rooms
      </Title>
      <div className="flex justify-end items-center gap-5 mb-5">
        Filter By:
        <FilterRooms rooms={rooms} />
        <FilterByClass rooms={rooms} />
      </div>
      <Suspense fallback={<Spinner />}>
        <RoomsList />
      </Suspense>
    </div>
  );
}
