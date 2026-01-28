"use client";

import { ButtonProp } from "../_types/ui";

export function Button({ type, children, text, bg, className }: ButtonProp) {
  return (
    <button
      type={type ? type : "button"}
      className={`w-full ${bg ? bg : "bg-white"} ${text ? text : "text-black"} font-bold ${className}`}
    >
      {children}
    </button>
  );
}
