import React from "react";
import { SparklesCore } from "./ui/sparkles";

// Define the type for the props
type SubtitleProps = {
  title: string;
  subTitle: string;
};

const GridBackgroundDemo: React.FC<SubtitleProps> = ({ title, subTitle }) => {
  return (
    <div
      className="h-[20rem] w-full bg-cover bg-center flex flex-col items-center justify-center overflow-hidden rounded-md relative"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg')` }}
    >
      {/* Dark Shadow Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="md:text-2xl text-xl lg:text-5xl font-bold">{title}</h1>
        <p className="font-medium my-2">{subTitle}</p>
      </div>

      {/* Gradients and Sparkles */}
      <div className="w-[40rem] h-24 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[7px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default GridBackgroundDemo;
