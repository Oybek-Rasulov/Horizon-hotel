import Link from "next/link";
import { Button } from "./Button";
import { NavLink } from "./NavLink";
import Image from "next/image";
import userIcon from "@/public/icons/profile.png";
import { useUser } from "../hooks/useUser";

export function Navigation() {
  const user = useUser();

  return (
    <nav>
      <ul className="flex gap-9 items-center text-sm">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/rooms">Rooms</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
        <li className="w-25">
          {user ? (
            <div className="flex items-center gap-3 px-3 py-1 bg-white rounded-full text-black">
              <span>{user?.user_metadata.first_name}</span>
              <Image src={userIcon} width={30} height={30} alt="user icon" />
            </div>
          ) : (
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
