import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const Tokenomics = () => {
  const data = [
    { name: 'Croudsale investors', value: 80 },
    { name: 'Foundation', value: 20 },
    // Add more data points as needed
  ]

  return (
    <div className="bg-white rounded-lg md:p-6 max-md:p-2 mb-4">
      <h1 className="text-2xl font-bold mb-8">Tokenomics</h1>
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
        Initial Distribution
      </h3>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="red"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="font-medium text-lg text-zinc-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit,
        atque aspernatur placeat expedita enim a voluptatibus nulla blanditiis
        repellat quod laboriosam eveniet harum natus doloribus eaque
        consequuntur repellendus corrupti ea distinctio maiores molestias
        voluptatem! Natus sed delectus adipisci eaque in, vitae laboriosam quos
        veritatis sequi minus nulla facere cumque accusantium beatae ratione
        ducimus illo quia culpa, quo similique alias.
      </p>
    </div>
  );
};

export default Tokenomics;
