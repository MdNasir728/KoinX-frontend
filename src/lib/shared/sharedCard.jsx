import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const SharedCard = ({ team, img, name }) => {
  return (
    <Card
      className={`${
        team
          ? "md:max-w-5/6 w-full h-[13rem] max-sm:h-[26rem]  max-sm:flex-col justify-center items-center md:px-8 px-2 py-4 bg-blue-100"
          : "p-2 max-w-[25rem] h-[13rem] items-start bg-blue-200"
      } flex overflow-hidden rounded-md`}
    >
      {team === "yes" ? (
        <div className="flex flex-col justify-center items-center w-[20rem]">
          <div className="flex justify-center items-center w-1/3  overflow-hidden">
            <img
              className="w-full h-full  rounded-xl bg-cover bg-no-repeat object-contain"
              src={img}
              alt="bitcoin"
            />
          </div>
          <h2 className="font-bold text-lg text-zinc-800">{name}</h2>
          <p className="text-zinc-500 font-semibold text-md">Designation</p>
        </div>
      ) : (
        <Avatar className="mr-[-14px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}

      <CardContent className="md:p-4 py-2 px-3">
        <CardTitle className={`${team && "hidden"} font-bold text-md`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardTitle>
        <p className={`${team ? "font-medium" : ""} overflow-hidden`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor
          iste voluptatibus magnam laudantium. Ut possimus suscipit, expedita
          sint eius minus amet odit. Non animi corporis asperiores minima
          voluptas voluptates
          <span className={`{team? 'block' : 'hidden'} max-sm:hidden`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nesciunt corrupti temporibus aut atque inventore laborum? Maiores
            quibusdam ipsum sit exercitationem inventore autem. Ut molestiae
            rem, consectetur soluta delectus repellendus.
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SharedCard;
