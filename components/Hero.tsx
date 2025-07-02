"use client";
import React from "react";
import { FlickeringGrid } from "./ui/Grad_bg";
import { ChevronDown } from "lucide-react";
import { AuroraText } from "./ui/AuroraText";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-row">
      {/* Left - Flickering Grid */}
      <div className="relative w-1/2 h-full">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={8}
          gridGap={4}
          color="#606060"
          maxOpacity={0.5}
          flickerChance={0.2}
          height={800}
          width={800}
        />
      </div>

      {/* Right - Intro Text and Scroll Arrow */}
      <div className="w-1/2 h-full flex flex-col justify-center text-center relative z-10">
        <div className="relative left-12 space-y-4">
          {/* Faraz Ahmad in same size */}
          <div className="flex justify-center items-center space-x-2 text-6xl">
            <p className="text-white">Faraz</p>
            <AuroraText>Ahmad</AuroraText>
          </div>

          {/* Subtext */}
          <div className="text-port-700 text-sm md:text-lg lg:text-2xl ">
            <p>a visual designer / motion graphic designer</p>
            <p>based in Delhi.</p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 right-1/2 translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white opacity-70 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
