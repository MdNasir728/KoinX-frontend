import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const SharedCard = ({ team, img, name }) => {
  return (
    <Card
      className={`${
        team
          ? "max-w-5/6 h-[13rem] justify-center items-center px-8 py-4 bg-blue-100"
          : "p-2 max-w-[25rem] h-[13rem] items-start bg-blue-200"
      } flex overflow-hidden rounded-md`}
    >
      {team === "yes" ? (
        <div className="flex flex-col justify-center items-center w-[20rem]">
          <img
            className="w-full h-[8rem] rounded-xl bg-cover bg-no-repeat"
            src={img}
            alt="bitcoin"
          />
          <h2 className="font-bold text-lg text-zinc-800">{name}</h2>
          <p className="text-zinc-500 font-semibold text-md">Designation</p>
        </div>
      ) : (
        <Avatar className="mr-[-14px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}

      <CardContent>
        <CardTitle className={`${team && "hidden"} font-bold text-md`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardTitle>
        <p className={`${team? 'font-medium' : ''} overflow-hidden`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor
          iste voluptatibus magnam laudantium. Ut possimus suscipit, expedita
          sint eius minus amet odit. Non animi corporis asperiores minima
          voluptas voluptates
          <span className={team? 'block' : 'hidden'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt corrupti temporibus aut atque inventore laborum? Maiores quibusdam ipsum sit exercitationem inventore autem. Ut molestiae rem, consectetur soluta delectus repellendus.</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SharedCard;
