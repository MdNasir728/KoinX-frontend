import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

const CoinData = ({
  isLoading,
  symbol,
  img,
  name,
  change,
  isChangePositive,
}) => {
  return (
    <div className="flex justify-between items-center">
      {isLoading ? (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center gap-2 ">
            <Avatar className="w-[2rem] h-[2rem]">
              <AvatarImage src={img} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">
              {name}
              {`(${symbol})`}
            </h3>
          </div>
          <p
            className={`${
              isChangePositive ? " text-green-600" : " text-red-600"
            } flex items-center justify-center font-medium rounded-md`}
          >
            {isChangePositive ? <MdArrowUpward /> : <MdArrowDownward />}{" "}
            {Number(change).toFixed(4)}%
          </p>
        </>
      )}
    </div>
  );
};

export default CoinData;
