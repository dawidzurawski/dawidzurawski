"use client";

import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="hidden sm:flex flex-row justify-between items-center p-4">
        <Link href="/" className="hover:text-zinc-300">
          Home
        </Link>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-zinc-300">
            About
          </Link>
          <Link href="/blog" className="hover:text-zinc-300">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-zinc-300">
            Projects
          </Link>
        </div>
      </div>

      <div className="block sm:hidden flex justify-end mx-4 mt-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className=" absolute right-4 top-16 w-40 p-2 block sm:hidden mt-2 mx-4 bg-zinc-900 shadow-lg rounded">
          <div className="flex flex-col items-end">
            <Link
              href="/"
              className="block p-2 text-right hover:bg-zinc-800 w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block p-2 text-right hover:bg-zinc-800 w-full"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block p-2 text-right hover:bg-zinc-800 w-full"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="block p-2 text-right hover:bg-zinc-800 w-full"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/*
Navbar

Home



About

Blog

Projects


----------------------------------------------------------------

Hamburger

----------------------------------------------------------------

Home

About

Blog

Project

**/