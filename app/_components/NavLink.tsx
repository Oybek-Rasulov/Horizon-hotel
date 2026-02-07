"use client";
import Link from "next/link";
import { NavLinkType } from "../_types/ui";
import { usePathname } from "next/navigation";

export function NavLink({ children, href = "" }: NavLinkType) {
  const currentPath = usePathname();
  const isActive = href === currentPath;

  return (
    <>
      <Link
        href={href}
        className={`${isActive ? "border-b-2" : ""} py-2 px-3 hover:border-b-2 transition`}
      >
        {children}
      </Link>
    </>
  );
}
