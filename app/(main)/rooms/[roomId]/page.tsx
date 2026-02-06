import { getRoom } from "@/app/_lib/data-services";
import { PageProps } from "@/app/_types/services";
import RoomUI from "@/app/_components/RoomUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Room",
};

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
