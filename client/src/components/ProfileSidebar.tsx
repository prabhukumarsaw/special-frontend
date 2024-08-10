import React from "react";
import { Button } from "./ui/moving-border";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import {
  BellDot,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircleQuestion,
  Moon,
  Settings,
  Sun,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";

const ProfileSidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Sheet>
      <SheetTrigger>
        <span className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </span>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-slate-900 flex flex-col h-full">
      <SheetHeader>
      <div className="bg-gray-100 my-4 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform sm:w-80 md:w-96 lg:w-full xl:full">
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Avatar"
            className="w-32 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform group-hover:w-36 group-hover:h-36"
          />
          <div className="w-fit text-center sm:text-left transition-all transform duration-500">
            <h1 className="text-gray-600 dark:text-gray-200 font-bold text-lg">
              Mary Phiri
            </h1>
            <p className="text-gray-400">Senior Developer</p>
            <a
              href="mailto:mary@gmail.com"
              className="text-xs text-gray-500 dark:text-gray-200 opacity-0 group-hover:opacity-100 transform transition-all delay-300 duration-500"
            >
              mary@gmail.com
            </a>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 p-2 bg-gray-600 dark:bg-gray-100 rounded-lg">
          <div className="flex space-x-2 text-2xl text-white dark:text-gray-600">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
              <Twitter />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-300">
              <Facebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300">
              <Instagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-300">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </SheetHeader>
        <div className="flex-1 flex items-center space-x-4 rounded-md border h-14 bg-gray-700 my-4 p-4"></div>
        <SheetFooter>
          <div className="inset-x-0 w-full border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 sm:px-8 py-2 items-center justify-between space-x-2 ">
            <span>
            <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md transform transition duration-200 hover:shadow-md ${
        theme === 'dark' ? ' text-white' : ' text-blue-600'
      }`}
    >
      {theme === 'dark' ? (
        <Sun
          className="text-yellow-400" // Apply specific color if using Tailwind classes
        />
      ) : (
        <Moon
          className="text-blue-800" // Apply specific color if using Tailwind classes
        />
      )}
    </button>
            </span>
            <span>
              <button className="px-4 py-2 rounded-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                <Settings />
              </button>
            </span>
            <span>
              <button className="px-4 py-2 rounded-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                <BellDot />
              </button>
            </span>
            <span>
              <button className="px-4 py-2 rounded-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                <MessageCircleQuestion />
              </button>
            </span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSidebar;
