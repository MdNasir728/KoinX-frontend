import React from "react";
import bitcoin from "../assets/bitcoin.jpg";
import bitcoin2 from "../assets/bitcoin2.jpg";
import GradientCard from "@/lib/shared/GradientCard";

const About = () => {
  return (
    <div className="bg-white rounded-lg md:p-6 max-md:p-2 mb-4 flex flex-col gap-y-4 font-medium text-lg text-zinc-700">
      <h1 className="text-2xl font-bold mb-2 text-black">About Bitcoin</h1>
      <h2 className="text-xl font-bold text-black">What is Bitcoin?</h2>
      <p>
        Bitcoin is a decentralized digital currency, often referred to as a
        cryptocurrency. It was invented in 2008 by an unknown person or group of
        people using the name Satoshi Nakamoto and was released as open-source
        software in 2009. Bitcoin operates on a peer-to-peer network, allowing
        users to send and receive payments without the need for a central
        authority, such as a bank.
      </p>
      <div className=" my-4 h-[1px] bg-gray-200 w-full" />

      <h2 className="text-xl font-bold text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quia!
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        adipisci maiores possimus aut blanditiis accusantium est corporis eos
        magnam delectus vel asperiores quas nesciunt accusamus, dolorum, cumque
        officia iusto temporibus earum impedit. Dolore sed autem, repudiandae
        corporis temporibus laboriosam dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        maiores sit libero! Excepturi cum suscipit tempore, enim, alias, quidem
        non unde itaque eaque doloremque saepe magni tempora quia aspernatur
        voluptas aperiam dolores iusto ad corporis quo! Vitae veniam quisquam
        maiores libero inventore provident voluptatum accusamus error assumenda
        delectus voluptas dignissimos, facilis, soluta reprehenderit recusandae
        adipisci obcaecati, natus nam.
      </p>
      <p>
        Bitcoin is a decentralized digital currency, often referred to as a
        cryptocurrency. It was invented in 2008 by an unknown person or group of
        people using the name Satoshi Nakamoto and was released as open-source
        software in 2009.
      </p>
      <div className=" my-4 h-[1px] bg-gray-200 w-full" />
      <h1 className="text-2xl font-semibold mb-2 text-black">
        Already Holding Bitcoin?
      </h1>
      <div className="flex md:flex-row md:justify-evenly flex-col gap-4">
        <GradientCard img={bitcoin} text="Calculate Your Profit" />
        <GradientCard img={bitcoin2} text="Calculate Your Tex Liability" />
      </div>
      <div className=" my-4 h-[1px] bg-gray-200 w-full" />
      <p>
        Bitcoin is a decentralized digital currency, often referred to as a
        cryptocurrency. It was invented in 2008 by an unknown person or group of
        people using the name Satoshi Nakamoto and was released as open-source
        software in 2009.
      </p>
    </div>
  );
};

export default About;
