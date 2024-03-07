import React from "react";
import SharedCard from "@/lib/shared/sharedCard";
import person_1 from "../assets/person_1.jpg";
import person_2 from "../assets/person_2.jpg";
import person_3 from "../assets/person_3.jpg";

const Team = () => {
  return (
    <div className="bg-white rounded-lg md:p-6 max-md:p-2 mb-4">
      <h1 className="text-2xl font-bold mb-8">Team</h1>
      <p className="font-medium text-lg text-zinc-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit,
        atque aspernatur placeat expedita enim a voluptatibus nulla blanditiis
        repellat quod laboriosam eveniet harum
      </p>
      <div className="flex flex-col gap-4 mt-4">
        <SharedCard team="yes" img={person_1} name="John Doe" />
        <SharedCard team="yes" img={person_2} name="Peter Park" />
        <SharedCard team="yes" img={person_3} name="Iron Man" />
      </div>
    </div>
  );
};

export default Team;
