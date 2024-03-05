import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CarouselCard from "@/lib/shared/CarouselCard";

const Sentiment = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4">
      <h1 className="bg-inherit text-2xl font-bold mb-8">Sentiments</h1>
      <>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          Key Events <FaCircleExclamation />
        </h3>
        <Carousel className=" m-6">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <>
                <CarouselItem key={index} className="basis-[47%]">
                  <div className="flex p-1 w-[30rem]">
                    <CarouselCard />
                  </div>
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </>
      <>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          Analyst Estimates<FaCircleExclamation />
        </h3>
        <div className="flex p-8 justify-start gap-4 items-center">
            <div className="bg-green-100 rounded-full w-[6rem] h-[6rem] text-green-600 text-2xl flex justify-center items-center ">76%</div>
            <div className="w-3/4">
                <div className="flex items-center">
                    <p className="w-[4rem]">Buy</p>
                    <span className="h-2 rounded-lg bg-green-900 w-[76%] mr-4"/>
                    <p>76%</p>
                </div>
                <div className="flex items-center">
                    <p className="w-[4rem]">Hold</p>
                    <span className="h-2 rounded-lg bg-gray-400 w-[8%] mr-4"/>
                    <p>8%</p>
                </div>
                <div className="flex items-center">
                    <p className="w-[4rem]">Sell</p>
                    <span className="h-2 rounded-lg bg-red-600 w-[16%] mr-4"/>
                    <p>16%</p>
                </div>
            </div>
        </div>
      </>
    </div>
  );
};

export default Sentiment;
