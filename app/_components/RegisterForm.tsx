"use client";

import { useState } from "react";
import { createSupabaseClient } from "../_lib/supabase";
import { Button } from "./Button";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const supabase = createSupabaseClient();

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phone,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(`Registration failed: ${error.message}`);
      return;
    }

    if (data.user?.id) {
      console.log("New user created:", data.user);
      console.log("Session token:", data.session?.access_token);

      // Local storage works now because this is client
      localStorage.setItem("userId", data.user.id);

      toast.success("Registration successful! Please log in");

      redirect("/auth/login");
    }
  }

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto mt-10 flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="John"
            name="firstName"
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Doe"
            name="lastName"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          placeholder="+998914443444"
          name="phone"
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9+ ]{9,15}"
          required
          className="border rounded w-full p-2"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="John@gmail.com"
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded w-full p-2"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          placeholder="********"
          name="password"
          id="password"
          type="password"
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded w-full p-2"
        />
      </div>

      <Button type="submit">Submit</Button>

      <Link href="/auth/login">
        <p className="text-end underline">Login</p>
      </Link>
    </form>
  );
}
