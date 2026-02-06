import Image from "next/image";
import bgImage from "@/public/images/bg.jpg";
import RegisterForm from "@/app/_components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

function Page() {
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
        <h1 className="text-3xl font-bold mb-20 text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Page;
