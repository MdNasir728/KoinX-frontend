import React from "react";
import { Doughnut } from "react-chartjs-2";

const Tokenomics = () => {
  const chartData = {
    labels: ["Croudsell Investors", "Foundation"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["blue", "lightred"],
      },
    ],
  };
  const option = {};
  return (
    <div className="bg-white rounded-lg md:p-6 max-md:p-2 mb-4">
      <h1 className="text-2xl font-bold mb-8">Tokenomics</h1>
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
        Initial Distribution
      </h3>
      <div>

      {/* <Doughnut data={chartData} options={option} /> */}
      </div>
      <p className="font-medium text-lg text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit, atque aspernatur placeat expedita enim a voluptatibus nulla blanditiis repellat quod laboriosam eveniet harum natus doloribus eaque consequuntur repellendus corrupti ea distinctio maiores molestias voluptatem! Natus sed delectus adipisci eaque in, vitae laboriosam quos veritatis sequi minus nulla facere cumque accusantium beatae ratione ducimus illo quia culpa, quo similique alias.</p>
    </div>
  );
};

export default Tokenomics;
