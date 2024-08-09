import React from "react";
import Image from "next/image"; // Use this if you are using Next.js
import { BackgroundBeams } from "./ui/background-beams";
import {Cover} from "@/components/ui/cover"
import FeatureHeroGrid from "@/components/FeatureHeroGrid";
import Subtitle from "./Subtitle";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <BackgroundBeams />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
      
        <div className="text-center px-4 text-wrap lg:text-left max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
        <Subtitle subtitle="Choose your own Destination" />
        <h1 className="text-4xl sm:text-xl md:text-2xl my-4 lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-200 to-amber-800 mb-4 ">
        Explore Jharkhand{''}s Untouched Beauty and <br /> at <Cover>Vibrant Culture</Cover>
      </h1>
    
          <p className="text-gray-500 font-medium sm:text-xs md:text-md lg:text-lg mb-6">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden md:block">
          {/* Add a responsive image or any other content here */}
          <FeatureHeroGrid />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
