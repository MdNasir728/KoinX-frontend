import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const GradientCard = ({img, text}) => {
  return (
    <Card className={`${text ==='Calculate Your Profit' ? 'gradient2' : 'gradient3'} p-4 flex w-full md:w-[25rem] h-[11rem]`}>
      <img
        className="w-[8rem] h-[8rem] rounded-xl bg-no-repeat object-cover"
        src={img}
        alt="bitcoin"
      />
      <CardContent>
        <h1 className="text-white text-xl font-bold mb-2">
          {text}
        </h1>
        <Button className="flex justify-center items-center bg-white shadow-lg text-zinc-800 font-bold text-lg hover:bg-slate-300">
          Button <IoArrowForwardSharp />
        </Button>
      </CardContent>
    </Card>
  );
};

export default GradientCard;
