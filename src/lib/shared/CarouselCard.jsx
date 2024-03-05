import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const CarouselCard = () => {
  return (
    <Card className="flex p-2 max-w-[25rem] h-[13rem] overflow-hidden  bg-blue-200 rounded-md">
      <Avatar className="mr-[-14px]">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <CardContent>
        <CardTitle className="font-bold text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardTitle>
        <p className="overflow-ellipsis overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor
          iste voluptatibus magnam laudantium. Ut possimus suscipit, expedita
          sint eius minus amet odit. Non animi corporis asperiores minima
          voluptas voluptates
        </p>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
