import React, { useState, useEffect } from "react";

import GDataCard from "./Cards/GDataCard";

export interface DataProps {
  temperature: number;
  humidity: number;
  setupName: string;
}
const GDataCarousel = ({ temperature, humidity, setupName }: DataProps) => {
  return (
    <div>
      <div className="flex justify-center mb-[1vh] mx-[2vw]">
        <h1 className="text-[3.5vh] text-[black]">Setup Devices</h1>
      </div>
      <GDataCard
        temperature={temperature}
        humidity={humidity}
        setupName={setupName}
      />
      {/* <Carousel className=" max-w-sm ml-[100px]">
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <GDataCard
                  temperature={temperature}
                  humidity={humidity}
                  setupName={setupName}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      {/* <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select the Device Name" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="dark"></SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
};

export default GDataCarousel;
