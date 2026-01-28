import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl max-w-md">
        <Ghost className="w-16 h-16 text-gray-400 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-white mb-2">
          404 – Page not found
        </h1>

        <p className="text-gray-400 mb-6">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
