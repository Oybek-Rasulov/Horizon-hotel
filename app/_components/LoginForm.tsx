import { redirect } from "next/navigation";
import { loginUser } from "../_lib/auth";
import { Button } from "./Button";

export function LoginForm() {
  async function handleUser(formData: FormData) {
    "use server";
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;

    const users = await loginUser({ login, password });

    if (users.length) {
      redirect("/");
    }
  }

  return (
    <form action={handleUser}>
      <div className="mb-4">
        <label htmlFor="login" className="block text-md mb-2">
          Login
        </label>
        <input
          type="text"
          name="login"
          id="login"
          className="focus:outline-none border border-white rounded-md w-full py-1 px-4 mb-1"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-md mb-2">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          className="focus:outline-none border border-white rounded-md w-full py-1 px-4 mb-1"
          placeholder="********"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
