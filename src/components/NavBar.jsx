"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const path = usePathname();
  return (
    <div className="w-full z-50 text-white font-medium text-lg lg:text-2xl font-inter px-24 lg:px-36 py-4 flex justify-end gap-x-6  lg:gap-x-12 bg-[#11264D] fixed top-0">
      <Link prefetch href={"/"}>
        <h1 className={`${path == "/" ? "font-bold" : ""}`}>Home</h1>
      </Link>
      <Link prefetch href={"/projects"}>
        <h1 className={`${path == "/projects" ? "font-bold" : ""}`}>
          Projects
        </h1>
      </Link>
      <Link prefetch href={"/about"}>
        <h1 className={`${path == "/about" ? "font-bold" : ""}`}>About</h1>
      </Link>
    </div>
  );
};
