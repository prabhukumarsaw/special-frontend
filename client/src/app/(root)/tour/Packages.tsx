"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { File, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/react-dropdown-menu";
import Image from "next/image";

const Packages = () => {
  return (
    <>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all" className="w-full mx-auto">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="temple">Temple</TabsTrigger>
              <TabsTrigger value="hills">Hills</TabsTrigger>
              <TabsTrigger value="waterfall">Water Fall</TabsTrigger>
              <TabsTrigger value="spots">Picnic Spot</TabsTrigger>
            </TabsList>

            <div className="ml-auto flex items-center gap-2">
              {/* Search Bar - Hidden on mobile devices */}
              <div className="relative hidden md:flex md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
              </div>

              {/* Filter Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center h-8 gap-1 px-2 py-1 bg-white border rounded-md">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white" align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem defaultChecked>
                    Latest
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Oldest</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Price Range
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Grid Layout for TabsContent */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Grid Item 1 */}
              <div className="max-w-xs w-full group/card">
                <div
                  className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
                  )}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                    <Image
                      height="100"
                      width="100"
                      alt="Avatar"
                      src="/manu.png"
                      className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-normal text-base text-gray-50 relative z-10">
                        Manu Arora
                      </p>
                      <p className="text-sm text-gray-400">2 min read</p>
                    </div>
                  </div>
                  <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      Author Card
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                      Card with Author avatar, complete name and time to read -
                      most suitable for blogs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid Item 2 */}
              <div className="max-w-xs w-full">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      Background Overlays
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                      This card is for some special elements, like displaying
                      background gifs on hover only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid Item 3 */}
              <div className="max-w-xs w-full">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      Background Overlays
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                      This card is for some special elements, like displaying
                      background gifs on hover only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid Item 4 */}
              <div className="max-w-xs w-full">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      Background Overlays
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                      This card is for some special elements, like displaying
                      background gifs on hover only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid Item 5 */}
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Item 5</h3>
                <p>Description for item 5.</p>
              </div>

              {/* Grid Item 6 */}
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Item 6</h3>
                <p>Description for item 6.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="popular">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Packages;
