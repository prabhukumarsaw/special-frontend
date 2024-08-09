import React from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SearchFeature = () => {
  return (
    <div className="h-auto rounded-3xl shadow-xl flex flex-col justify-center mx-4 md:mx-10 lg:mx-20 items-center px-4 py-6  border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <LabelInputContainer>
          <Label htmlFor="Location">Location</Label>
          <Input id="Location" placeholder="Where are you going?" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="type">Package Type</Label>
          <Input id="packageType" placeholder="Package Type" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="MaxPeople">Max People</Label>
          <Input
            id="MaxPeople"
            placeholder="Enter Number of People"
            type="text"
          />
        </LabelInputContainer>
        <div className="flex justify-center sm:justify-end lg:justify-center mt-4 lg:mt-0">
          <button
            className="bg-gradient-to-br mt-8 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-amber-600 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Search &rarr;
            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFeature;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
