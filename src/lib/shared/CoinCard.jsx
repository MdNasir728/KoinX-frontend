import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CoinCard = ({
  symbol,
  img,
  price,
  sparkline,
  change,
  isLoading,
  isChangePositive,
}) => {
  return (
    <Card className="flex flex-col h-[10rem] justify-start bg-blue-100 p-3 md:w-[14rem] w-full items-start rounded-md">
      {isLoading ? (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2"></div>
        </div>
      ) : (
        <>
          <div className="flex gap-2 justify-center items-center">
            <Avatar className="w-[1rem] h-[1rem]">
              <AvatarImage src={img} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{symbol}</h3>
            <p
              className={`${
                isChangePositive
                  ? "bg-green-200 text-green-600"
                  : "bg-red-200 text-red-600"
              }  font-medium rounded-md px-1`}
            >
              {Number(change).toFixed(4)}%
            </p>
          </div>
          <p className="font-medium m-2">{price}</p>
          <div className="flex items-center justify-center w-full">
            <img src={sparkline} alt="" />
          </div>
        </>
      )}
    </Card>
  );
};

export default CoinCard;
