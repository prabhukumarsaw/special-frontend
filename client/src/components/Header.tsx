"use client";
import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import Image from "next/image";
import { Button } from "./ui/moving-border";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <header className="fixed inset-x-0  top-0 flex h-16 items-center justify-between gap-4 border-b bg-slate-50 px-4 md:px-6 z-50">
        {/* Logo on the Left */}
        <div className="flex shrink-0">
          <a aria-current="page" className="flex items-center" href="/">
            <Image
              className="h-7 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Logo"
              width={8}
              height={8}
            />
          </a>
        </div>

        {/* Nav Menu Centered on Large Screens */}
         <FloatingNav navItems={navItems} />
        

        {/* Search Bar on the Right */}
        <div className="flex items-center gap-4 md:ml-auto">
          <div className="relative flex-1 sm:flex-initial">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
      </Button>
      
      </header>

      {/* Bottom Navigation for Mobile Screens */}
      <nav className=" inset-x-0 bottom-0 z-10 flex items-center justify-around bg-white py-2 shadow-lg sm:hidden">
        <a href="/" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs text-gray-600">Home</span>
        </a>
        <a href="/search" className="flex flex-col items-center">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs text-gray-600">Search</span>
        </a>
        <a href="/profile" className="flex flex-col items-center">
          <UserIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs text-gray-600">Profile</span>
        </a>
      </nav>
    </>
  );
}

export default Header;
