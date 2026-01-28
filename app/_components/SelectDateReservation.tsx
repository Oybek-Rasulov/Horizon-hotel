"use client";

import React from "react";
import { Checkbox, DatePicker, Input, Space } from "antd";
import type { DatePickerProps } from "antd";
import type { CheckboxProps } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const onChangeCheckbox: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const SelectDateReservation: React.FC = () => (
  <div className="mb-3">
    <div className="flex gap-8 mt-5">
      <div>
        <p className="mb-2">Start date</p>

        <DatePicker
          onChange={onChange}
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
          onChange={onChange}
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
);

export default SelectDateReservation;
