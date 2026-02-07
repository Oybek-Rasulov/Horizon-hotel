"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createSupabaseClient } from "../_lib/supabase";
import { Button } from "./Button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createSupabaseClient();

  async function handleUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailTrimmed = email.trim();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailTrimmed,
      password,
    });

    if (error) {
      toast.error(
        error.message ||
          "Login credentials are incorrect!, Please register first",
      );
      return;
    }

    if (data.session?.access_token) {
      // ✅ This is where you paste the snippet
      await fetch("/api/auth/set-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: data.session.access_token }),
      });

      // Force page reload so middleware sees the cookie
      router.push("/reservations"); // or window.location.href = "/reservations"
    }

    if (data.user?.id) {
      localStorage.setItem("userId", data.user.id);
      console.log("USER:", data.user);
      console.log("SESSION:", data.session);
      console.log("ACCESS TOKEN:", data.session?.access_token);

      router.push("/");
    }
  }

  return (
    <>
      <form
        onSubmit={handleUser}
        className="max-w-md mx-auto mt-10 flex flex-col gap-4"
      >
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2 focus:outline-none"
            required
          />
        </div>

        <Button type="submit" className="bg-blue-60 py-2 rounded">
          Login
        </Button>
      </form>
    </>
  );
}
