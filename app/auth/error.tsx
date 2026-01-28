"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <div className="max-w-md w-full text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-14 h-14 text-red-400" />
        </div>

        <h1 className="text-2xl font-semibold text-white mb-2">
          {error.message}, Please try again : (
        </h1>

        <p className="text-gray-400 mb-6">
          Error occurred. Please try again or return to the homepage.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            Try again
          </button>

          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
