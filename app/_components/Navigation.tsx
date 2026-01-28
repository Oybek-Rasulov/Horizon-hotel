import Link from "next/link";
import { Button } from "./Button";
import { NavLink } from "./NavLink";

export function Navigation() {
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
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
