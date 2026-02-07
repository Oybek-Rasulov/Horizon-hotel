"use client";

import React, { useEffect, useState } from "react";
import { Checkbox, DatePicker, Input } from "antd";
import type { DatePickerProps } from "antd";
import type { CheckboxProps } from "antd";
import Link from "next/link";
import { Button } from "./Button";
import { RoomsType } from "../_types/data";
import { ReservationDetailsType } from "../_types/form";
import { reserveRoom } from "../_lib/data-services";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { User } from "../_lib/auth";

function SelectDateReservation({ room }: { room: RoomsType[] }) {
  const [reservationDetails, setReservationDetails] =
    useState<ReservationDetailsType>({
      start_date: null,
      end_date: null,
      guest_number: 0,
      breakfast: false,
      rooms_id: room[0]?.id,
    });

  const [isLoading, setIsloading] = useState(false);

  const onChangeDate1: DatePickerProps["onChange"] = (dateString) => {
    setReservationDetails({ ...reservationDetails, start_date: dateString });
  };

  const onChangeDate2: DatePickerProps["onChange"] = (dateString) => {
    // if (
    //   reservationDetails?.start_date &&
    //   dateString &&
    //   dateString.valueOf() < reservationDetails.start_date.valueOf()
    // ) {
    //   toast.error("End date should be after start date");
    //   return;
    // }
    setReservationDetails({ ...reservationDetails, end_date: dateString });
  };

  const handleGuestNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservationDetails({
      ...reservationDetails,
      guest_number: e.target.value,
    });
  };

  const onChangeCheckbox: CheckboxProps["onChange"] = (e) => {
    setReservationDetails({
      ...reservationDetails,
      breakfast: e.target.checked,
    });
  };

  const handleSubmit = async () => {
    if (
      reservationDetails?.start_date &&
      reservationDetails?.end_date &&
      reservationDetails.end_date.valueOf() <
        reservationDetails.start_date.valueOf()
    ) {
      toast.error("End date should be after start date");
      return;
    }

    if (!reservationDetails?.start_date) {
      toast.error("Please select start date");
      return;
    }

    if (!reservationDetails?.end_date) {
      toast.error("Please select end date");
      return;
    }
    if (!reservationDetails?.guest_number) {
      toast.error("Please enter guest number");
      return;
    }

    setIsloading(true);
    const { message } = await reserveRoom(reservationDetails);
    setIsloading(false);
    toast.success(message);
    redirect("/reservations");
  };

  return (
    <div>
      <div className="mb-3">
        <div className="flex gap-8 mt-5">
          <div>
            <p className="mb-2">Start date</p>

            <DatePicker
              onChange={onChangeDate1}
              style={{
                backgroundColor: "#1B2631",
                color: "#fff",
                width: 150,
                height: 35,
              }}
              className="dateInput"
              name="date"
              placeholder="Date"
            />
          </div>
          <div>
            <p className="mb-2">End date</p>

            <DatePicker
              onChange={onChangeDate2}
              style={{
                backgroundColor: "#1B2631",
                color: "#fff",
                width: 150,
                height: 35,
              }}
              className="dateInput"
              name="date"
              placeholder="Date"
            />
          </div>
          <div>
            <p className="mb-2">Guest number</p>
            <Input
              placeholder="Guests"
              onChange={(e) => handleGuestNumber(e)}
              value={reservationDetails?.guest_number ?? ""}
              style={{
                width: 150,
                height: 35,
                background: "#1B2631",
                color: "#fff",
              }}
              className="reserve-input placeholder-white"
            />
          </div>
        </div>
        <Checkbox
          onChange={onChangeCheckbox}
          style={{
            color: "white",
            marginRight: "10px",
            marginTop: "20px",
            background: "#1B2631",
          }}
        />
        Breakfast
      </div>

      <span>
        Price:{" "}
        <span className="text-yellow-600 text-3xl">
          $
          {reservationDetails.breakfast
            ? Number(room[0]?.price_per_night) + 25
            : room[0]?.price_per_night}{" "}
          USD
        </span>
      </span>

      <div className="mt-3">
        <Link href={`/rooms/${room[0]?.id}`}>
          <Button
            className="text-sm w-full"
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            {isLoading ? "Loading..." : "Reserve now"}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectDateReservation;
