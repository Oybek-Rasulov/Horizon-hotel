"use client";
import { Typewriter } from "react-simple-typewriter";
import { TitleProp } from "../_types/ui";

export function Title({ children, color, size, typing, className }: TitleProp) {
  return (
    <h1
      className={`${className} font-semibold leading-10 tracking-tight ${color ? color : "not-last:text-black"} ${size ? size : "text-3xl"} dark:text-zinc-50`}
    >
      {typing ? (
        <Typewriter
          words={[typeof children === "string" ? children : ""]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      ) : (
        children
      )}
    </h1>
  );
}
