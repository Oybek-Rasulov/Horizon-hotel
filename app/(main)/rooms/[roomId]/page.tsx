import { Button } from "@/app/_components/Button";
import ImageCarousel from "@/app/_components/ImageCarousel";
import { Title } from "@/app/_components/Title";
import { getRoom } from "@/app/_lib/data-services";
import { PageProps } from "@/app/_types/services";
import { Lamp, SearchCheck, Users } from "lucide-react";
import Link from "next/link";
import SelectDateReservation from "../../../_components/SelectDateReservation";

export default async function Page({ params }: PageProps) {
  const { roomId } = params;
  const room = await getRoom(roomId);

  if (!room || room.length === 0) {
    return <div className="text-white text-center">Room not found</div>;
  }

  return (
    <div className="mt-10">
      <Title className="text-center" color="white">
        {room[0].name}
      </Title>
      <div className="relative flex h-[80%] w-[100%] bg-[#1B2631] p-5 mt-10 rounded">
        <span
          className={`${room[0]?.level?.toLowerCase() === "standard" ? "text-yellow-600" : room[0].level.toLowerCase() === "premium" ? "text-purple-600" : "text-pink-600"} rounded absolute top-2 right-2 text-[0.8rem] border py-1 px-2`}
        >
          {room[0]?.level}
        </span>
        <div className="w-[100%] mr-10 mb-[-5rem]">
          <ImageCarousel images={room[0].gallery_images} height="h-110" />
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
        <div className="w-full">
          {/* <Title size="text-lg" className="mb-4" color="white">
            {room[0].name}
          </Title> */}
          <p className="text-[1rem]">{room[0].description}</p>
          <div className="flex gap-10">
            <div className="flex flex-col mt-5 text-[15px]">
              <div className="flex items-center mb-2">
                <SearchCheck size={20} className="mr-2" />
                <span>
                  {" "}
                  Status:{" "}
                  <span
                    className={`${room[0].status === "available" ? "text-green-600" : room[0].status === "occupied" ? "text-red-600" : "text-yellow-600"}`}
                  >
                    {room[0].status}
                  </span>
                </span>
              </div>

              <div className="flex items-center mb-2">
                <Users size={20} className="mr-2" />
                <span>Capacity: {room[0].capacity}</span>
              </div>

              <div className="flex items-center mb-5">
                <Lamp size={20} className="mr-2" />
                <span>Room Number: {room[0].room_number}</span>
              </div>
            </div>

            <div className="flex flex-col mt-5 text-[15px]">
              <div className="flex items-center mb-2">
                <SearchCheck size={20} className="mr-2" />
                <span>
                  {" "}
                  Status:{" "}
                  <span
                    className={`${room[0].status === "available" ? "text-green-600" : room[0].status === "occupied" ? "text-red-600" : "text-yellow-600"}`}
                  >
                    {room[0].status}
                  </span>
                </span>
              </div>

              <div className="flex items-center mb-2">
                <Users size={20} className="mr-2" />
                <span>Capacity: {room[0].capacity}</span>
              </div>

              <div className="flex items-center mb-5">
                <Lamp size={20} className="mr-2" />
                <span>Room Number: {room[0].room_number}</span>
              </div>
            </div>
          </div>
          <div>
            <SelectDateReservation />
          </div>
          <span>
            Price:{" "}
            <span className="text-yellow-600 text-3xl">
              ${room[0].price_per_night} USD
            </span>
          </span>

          <div className="mt-3">
            <Link href={`/rooms/${room[0].id}`}>
              <Button className="text-sm w-full">Reserve now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
