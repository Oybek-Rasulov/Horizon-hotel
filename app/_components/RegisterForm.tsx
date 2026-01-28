// app/register/page.tsx
import { redirect } from "next/navigation";
import { registerUser } from "../_lib/auth";
import { Button } from "./Button";
import Link from "next/link";

export const dynamic = "force-dynamic"; // Make sure the page is dynamic

export async function RegisterForm() {
  async function handleUser(formData: FormData) {
    "use server";

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const login = formData.get("email") as string;
    const password = formData.get("password") as string;

    await registerUser({
      firstName,
      lastName,
      phone,
      login,
      password,
    });

    redirect("/reservations");
  }

  return (
    <form
      action={handleUser}
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
          required
          className="border rounded w-full p-2"
        />
      </div>

      <Button type="submit" className="bg-blue-600 rounded py-2">
        Register
      </Button>
      <Link href="/auth/login">
        <p className="text-end underline">Login</p>
      </Link>
    </form>
  );
}
