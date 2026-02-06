import Image from "next/image";
import bgImage from "@/public/images/bg.jpg";
import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

async function Page() {

  return (
    <div className="w-full h-screen flex items-center justify-center text-white">
      <Image
        src={bgImage}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Login background"
      />
      <div className="relative backdrop-blur-xl bg-black/10 border-white/25 w-90 py-6 px-6 border rounded-xl shadow-md shadow-white">
        <h1 className="text-3xl font-bold mb-20 text-center">Login</h1>
        <div className="mb-3">
          <LoginForm />
        </div>
        <Link href="/auth/register">
          <p className="underline text-end">Register</p>
        </Link>
      </div>
    </div>
  );
}

export default Page;
