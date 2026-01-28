"use client";

import { Title } from "./Title";
import { Lamp, SearchCheck, Users } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";
import { RoomsType } from "../_types/data";
import ImageCarousel from "./ImageCarousel";
import { useFilterRoom } from "../store/useFilterRooms";

export function RoomsList() {
  const rooms = useFilterRoom((state) => state.roomsData);

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-15 justify-center">
      {rooms?.map((room: RoomsType) => (
        <div
          className="relative flex w-[48%] bg-[#1B2631] p-5 rounded"
          key={room.id}
        >
          <span
            className={`${room?.level.toLowerCase() === "standard" ? "text-yellow-600" : room.level.toLowerCase() === "premium" ? "text-purple-600" : "text-pink-600"} rounded absolute top-2 right-2 text-[0.6rem] border py-1 px-2`}
          >
            {room.level}
          </span>
          <div className="w-[50%] h-50 mr-10">
            <ImageCarousel images={room.gallery_images} />
          </div>
          {/* {room.gallery_images.map((image: string, index: number) => (
            <div key={index} className="flex-1 relative w-full h-full">
              <Image
                src={image}
                fill
                alt={`room` + index}
                className="object-cover border-r border-primary-800"
              />
            </div>
          ))} */}
          <div className="">
            <Title size="text-lg" className="mb-4" color="white">
              {room.name}
            </Title>
            <p className="text-[0.8rem]">{room.description}</p>

            <div className="flex flex-col mt-5 text-[12px]">
              <div className="flex items-center mb-2">
                <SearchCheck size={20} className="mr-2" />
                <span>
                  {" "}
                  Status:{" "}
                  <span
                    className={`${room.status === "available" ? "text-green-600" : room.status === "occupied" ? "text-red-600" : "text-yellow-600"}`}
                  >
                    {room.status}
                  </span>
                </span>
              </div>

              <div className="flex items-center mb-2">
                <Users size={20} className="mr-2" />
                <span>Capacity: {room.capacity}</span>
              </div>

              <div className="flex items-center mb-5">
                <Lamp size={20} className="mr-2" />
                <span>Room Number: {room.room_number}</span>
              </div>
            </div>
            <span>
              Price:{" "}
              <span className="text-yellow-600">
                ${room.price_per_night} USD
              </span>
            </span>

            <div className="mt-3">
              <Link href={`rooms/${room.id}`}>
                <Button className="text-sm">Reserve now</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
