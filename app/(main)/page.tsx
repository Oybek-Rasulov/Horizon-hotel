import Image from "next/image";
import mainImage from "@/public/images/main.jpg";
import Link from "next/link";
import { Title } from "../_components/Title";
import { Button } from "../_components/Button";

export default function Home() {
  return (
    <main className="mt-20 w-full py-3 px-3 bg-white dark:bg-black">
      <Image
        className="object-cover object-top"
        src={mainImage}
        alt="Main background"
        fill
        placeholder="blur"
        quality={100}
      />
      <div className="relative flex flex-col items-center">
        <div className="w-100 mt-10 flex justify-between items-center backdrop-blur-xs bg-white/10 border-white/25 rounded-t-2xl py-3 px-7">
          <Title typing={true}>Explore our luxury Rooms</Title>
        </div>
        <div className="w-300 mb-10 flex justify-between items-center backdrop-blur-xs bg-white/10 border-white/25 rounded-b-xl rounded-tr-2xl py-3 px-7">
          <p>
            Our rooms are designed to provide a perfect blend of comfort, style,
            and modern amenities. Each space features plush bedding, tasteful
            decor, and all the conveniences you need for a relaxing stay.
            Whether you are here for business or leisure, our rooms offer a
            peaceful retreat from the city’s bustle.
          </p>
        </div>
        <div className="w-40">
          <Link href="rooms">
            <Button>Explore</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
    </main>
  );
}
