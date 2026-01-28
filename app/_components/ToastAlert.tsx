"use client";

import { Toaster } from "react-hot-toast";

export function ToastAlert() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          //   width: "200px",
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "12px",
          padding: "10px 13px",
          outline: "none",
        },
        error: {
          style: {
            border: "2px solid #ef4444",
            color: "#ef4444",
          },
        },
        success: {
          style: {
            border: "2px solid #22c55e",
            color: "#22c55e",
          },
        },
      }}
    />
  );
}
