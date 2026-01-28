import { Button } from "@/app/_components/Button";
import { Title } from "@/app/_components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* <Image src={aboutbg} fill quality={100} alt="about" /> */}

      <div className="flex justify-between items-center mt-10">
        <div className="flex flex-col gap-10 w-[50%] mr-20    ">
          <Title size="text-3xl" color="text-white">
            Elegant Hospitality
          </Title>
          <p>
            Experience unparalleled comfort and elegance at our hotel. We
            combine modern design with thoughtful amenities to ensure every
            guest feels at home. From relaxing stays to memorable events, our
            team is dedicated to creating a perfect experience.
          </p>
          <p>
            Our hotel is designed to be your sanctuary. Enjoy spacious,
            beautifully appointed rooms, exceptional service, and a warm
            atmosphere. Whether you’re traveling for business or leisure, we
            make every stay seamless and unforgettable.
          </p>
          <div className="w-50">
            <Link href="/rooms">
              <Button>Explore</Button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/room1.jpg"
          width={500}
          height={200}
          alt="room"
          className="rounded w-[50%]"
        />
      </div>

      <div className="flex justify-between items-center mt-20 mb-10">
        <Image
          src="/images/room2.jpg"
          width={500}
          height={200}
          alt="room"
          className="rounded w-[50%] mr-20"
        />
        <div className="flex flex-col gap-10 w-[50%]  ">
          <Title size="text-3xl" color="text-white">
            A Home Away from Home
          </Title>
          <p>
            Experience unparalleled comfort and elegance at our hotel. We
            combine modern design with thoughtful amenities to ensure every
            guest feels at home. From relaxing stays to memorable events, our
            team is dedicated to creating a perfect experience.
          </p>
          <p>
            Our hotel is designed to be your sanctuary. Enjoy spacious,
            beautifully appointed rooms, exceptional service, and a warm
            atmosphere. Whether you’re traveling for business or leisure, we
            make every stay seamless and unforgettable.
          </p>

          <div className="w-50">
            <Link href="/rooms">
              <Button>Explore</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
