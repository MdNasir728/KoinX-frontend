import GradientBar from "@/lib/shared/GradientBar";
import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { fundamentals } from "@/lib/constant";

const FeatureDetail = () => {
  return (
    <div className="bg-white rounded-lg md:p-6 max-md:p-2 mb-4">
      <h1 className="bg-inherit text-2xl font-bold mb-8">Performance</h1>
      <>
        <div className="bg-white md:gap-4 gap-2 flex justify-between items-center mb-6">
          <GradientBar name="Today's Low" value="46,956.33" />
          <div className="gradient h-2 w-full flex-1 bg-inherit rounded-xl" />
          <GradientBar name="Today's High" value="49,938.83" />
        </div>
        <div className="bg-white md:gap-4 gap-2 flex justify-between items-center mb-6">
          <GradientBar name="52W Low" value="46,956.33" />
          <div className="gradient h-2 w-full bg-inherit flex-1 rounded-xl" />
          <GradientBar name="52W High" value="49,956.33" />
        </div>
      </>
      <>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          Fundamentals <FaCircleExclamation />
        </h3>
        <div className="md:grid md:grid-cols-2 flex flex-col justify-center gap-x-4">
          {fundamentals.map((item) => {
            return (
              <div key={item.name} className="flex justify-between border-b-2 p-3 border-gray-300 w-full">
                <h5>{item.name}</h5>
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default FeatureDetail;
