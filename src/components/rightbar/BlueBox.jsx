import React from "react";
import bitcoin2 from "../../assets/bitcoin2.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Button } from "../ui/button";

const BlueBox = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-blue-500 w-full rounded-lg p-4 md:p-8 mb-4 md:gap-8 gap-4">
      <h1 className="text-center font-sans text-xl font-bold">
        Get Started with KoinX <br />
        for FREE
      </h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        repellat laboriosam veritatis voluptatem, corporis similique.
      </p>
      <img
        className="w-[8rem] h-[8rem] rounded-xl bg-cover bg-no-repeat"
        src={bitcoin2}
        alt="bitcoin"
      />
      <Button className="flex justify-center items-center bg-white shadow-lg text-zinc-800 font-bold text-md hover:bg-slate-300">
          Get Stareted for FREE <IoArrowForwardSharp />
        </Button>
    </div>
  );
};

export default BlueBox;
