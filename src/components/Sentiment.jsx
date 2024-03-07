import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SharedCard from "@/lib/shared/sharedCard";

const Sentiment = () => {
  return (
    <div className="bg-white rounded-lg md:p-6 max-md:p-2 mb-4">
      <h1 className="bg-inherit text-2xl font-bold mb-8">Sentiments</h1>
      <>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          Key Events <FaCircleExclamation />
        </h3>
        <Carousel className=" lg:m-6 max-md:overflow-x-auto overflow-hidden">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-[47%] md:basis-[60%] basis-full">
                <div className="flex p-1 md:w-[30rem] w-full">
                  <SharedCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='md:block hidden'/>
          <CarouselNext  className='md:block hidden' />
        </Carousel>
      </>
      <>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          Analyst Estimates
          <FaCircleExclamation />
        </h3>
        <div className="flex md:p-8 max-md:p-2 justify-start gap-4 items-center">
          <div className="bg-green-100 rounded-full md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] text-green-600 text-2xl flex justify-center items-center ">
            76%
          </div>
          <div className="md:w-3/4 w-full">
            <div className="flex items-center">
              <p className="md:w-[4rem] w-[3rem]">Buy</p>
              <span className="h-2 rounded-lg bg-green-900 w-[76%] mr-4" />
              <p>76%</p>
            </div>
            <div className="flex items-center">
              <p className="md:w-[4rem] w-[3rem]">Hold</p>
              <span className="h-2 rounded-lg bg-gray-400 w-[8%] mr-4" />
              <p>8%</p>
            </div>
            <div className="flex items-center">
              <p className="md:w-[4rem] w-[3rem]">Sell</p>
              <span className="h-2 rounded-lg bg-red-600 w-[16%] mr-4" />
              <p>16%</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sentiment;
