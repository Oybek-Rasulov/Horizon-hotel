"use client";

import { ButtonProp } from "../_types/ui";

export function Button({
  type,
  children,
  text,
  bg,
  className,
  onClick,
  isLoading,
}: ButtonProp) {
  return (
    <button
      type={type ? type : "button"}
      className={`w-full ${bg ? (isLoading ? "bg-[#1b2631] text-white border" : bg) : isLoading ? "bg-[#1b2631] text-white border" : "bg-white"} ${text ? text : "text-black"} font-bold ${className}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}
