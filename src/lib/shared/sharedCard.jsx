import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const SharedCard = ({ team, img, name }) => {
  return (
    <Card
      className={`${
        team
          ? "md:max-w-5/6 w-full md:h-[13rem] sm:h-[18rem] max-sm:h-[26rem]  max-sm:flex-col justify-center items-center lg:px-4 px-2 bg-blue-100"
          : "p-2 max-w-[25rem] h-[13rem] items-start bg-blue-200"
      } flex overflow-hidden rounded-md`}
    >
      {team === "yes" ? (
        <div className="flex flex-col justify-center items-center w-[20rem] sm:h-full">
          <div className="flex justify-center items-center sm:w-full w-1/3 overflow-hidden">
            <img
              className="w-full h-full  rounded-xl bg-cover bg-no-repeat object-cover"
              src={img}
              alt="bitcoin"
            />
          </div>
          <h2 className="font-bold text-lg text-zinc-800">{name}</h2>
          <p className="text-zinc-500 font-semibold text-md">Designation</p>
        </div>
      ) : (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}

      <CardContent className="py-0 pl-2 h-full">
        <CardTitle className={`${team && "hidden"} font-bold text-md`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardTitle>
        <p className={`${team ? "font-medium" : ""} overflow-hidden py-2`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor
          iste voluptatibus magnam laudantium. Ut possimus suscipit, expedita
          sint eius minus amet odit. Non animi corporis asperiores minima
          voluptas voluptates
          <span className={`${team? 'block' : 'hidden'} max-sm:hidden`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nesciunt corrupti temporibus aut atque inventore laborum? Maiores
            quibusdam ipsum sit exercitationem inventore autem. 
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SharedCard;
