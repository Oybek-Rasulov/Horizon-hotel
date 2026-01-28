import Image from "next/image";
import logo from "@/public/images/logo.png";

export function Logo() {
  return (
    <div className="bg-transparent">
      <Image
        src="/images/logo.png"
        unoptimized
        className="bg-transparent rounded-full object-cover"
        width={50}
        height={50}
        alt="Logo"
      />
    </div>
  );
}
