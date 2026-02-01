import { Button } from "@/app/_components/Button";
import ImageCarousel from "@/app/_components/ImageCarousel";
import { Title } from "@/app/_components/Title";
import { getRoom } from "@/app/_lib/data-services";
import { PageProps } from "@/app/_types/services";
import { Lamp, SearchCheck, Users } from "lucide-react";
import Link from "next/link";
import SelectDateReservation from "../../../_components/SelectDateReservation";
import RoomUI from "@/app/_components/RoomUI";

export default async function Page({ params }: PageProps) {
  const { roomId } = await params;
  const room = await getRoom(roomId);

  if (!room || room.length === 0) {
    return <div className="text-white text-center">Room not found</div>;
  }

  return (
    <>
      <RoomUI room={room} />
    </>
  );
}
