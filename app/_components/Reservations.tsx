"use client";

import { useEffect, useState } from "react";
import { ReservationDetailsType } from "../_types/form";
import { deleteReservation, getReservations } from "../_lib/data-services";
import { Title } from "./Title";
import Image from "next/image";
import { Lamp, Trash, Users } from "lucide-react";
import dayjs from "dayjs";
import { Button } from "./Button";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Reservations() {
  const [reservationData, setReservationData] = useState<
    null | ReservationDetailsType[]
  >(null);

  useEffect(() => {
    getReservations().then(setReservationData);
  }, []);

  async function handleDelete(id: string | number) {
    const { message } = await deleteReservation(id);

    if (message) {
      toast.success(message);
      setReservationData(null);
    }
  }

  if (!reservationData?.length)
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center">
        <Title>
          <span className="text-gray-500">
            There is no reservations. Reserve room :(
          </span>
        </Title>
        <div className="w-[300px] mt-10">
          <Link href="/rooms">
            <Button>Explore rooms</Button>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="px-15 mt-10 py-5">
      <Title className="text-center" color="white">
        Your Reservations
      </Title>
      <div className="flex">
        {reservationData?.map((data: ReservationDetailsType, index: number) => (
          <div
            key={index}
            className="w-full bg-[#1b2631] mt-5 flex flex-col relative"
          >
            <div>
              <Image
                src={data?.rooms?.gallery_images?.[0] || "/placeholder.jpg"}
                alt={`room ${data?.rooms?.id}`}
                width={400}
                height={400}
              />
            </div>
            <div className="py-3 px-5">
              <Title className="text-xl" color="white">
                {data?.rooms?.name}
              </Title>
              <p className="text-sm">{data?.rooms?.description}</p>
              <div className="flex items-center mb-2 mt-2 text-sm">
                <Users size={15} className="mr-2" />
                <span>Capacity: {data?.rooms?.capacity}</span>
              </div>
              <div className="flex items-center mb-5 text-sm">
                <Lamp size={15} className="mr-2" />
                <span>Room Number: {data?.rooms?.room_number}</span>
              </div>
              <p className="text-sm mb-1">
                <span className="mr-2">Start Date:</span>
                <span>
                  {Array.isArray(data?.start_date)
                    ? dayjs(data.start_date[0]).format("YYYY-MM-DD")
                    : data?.start_date
                      ? dayjs(data.start_date).format("YYYY-MM-DD")
                      : ""}
                </span>
              </p>
              <p className="text-sm mb-2">
                <span className="mr-2">End Date:</span>
                <span>
                  {Array.isArray(data?.start_date)
                    ? dayjs(data.start_date[0]).format("YYYY-MM-DD")
                    : data?.start_date
                      ? dayjs(data.start_date).format("YYYY-MM-DD")
                      : ""}
                </span>
              </p>
              <span>
                Price:{" "}
                <span className="text-yellow-600">
                  ${data?.rooms?.price_per_night} USD
                </span>
              </span>{" "}
            </div>
            <div className="absolute right-2 top-2">
              <Button
                className="h-full rounded hover:bg-red-500 hover:text-white"
                onClick={() => {
                  if (data?.id !== undefined) {
                    handleDelete(data.id);
                  }
                }}
              >
                <Trash />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
