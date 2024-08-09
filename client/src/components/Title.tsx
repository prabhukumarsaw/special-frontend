import React from 'react';
import { SparklesCore } from './ui/sparkles';

// Define the type for the props
type SubtitleProps = {
  title: string; // Explicitly define the type for subtitle
  subTitle: string; 
};

const Subtitle: React.FC<SubtitleProps> = ({ title, subTitle }) => {
  return (
    <div className=" bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">

  <h5 className="services__subtitle">
  {subTitle}
</h5>

<h2 className="text-md md:text-lg lg:text-2xl font-bold text-gray-900">
  {title}
</h2>

    <div className="w-[40rem] h-10 relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-10"
        particleColor="#4338ca"
      />

  </div>
  </div>
  );
};

export default Subtitle;
