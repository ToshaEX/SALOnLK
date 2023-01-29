import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function ServiceChart() {
  const data = [
    { name: "Hair", value: 400, fill: "#514f81" },
    { name: "Nails", value: 300, fill: "#44426c" },
    { name: "Brow", value: 300, fill: "#363456" },
    { name: "MakeUp", value: 200, fill: "#282740" },
    { name: "Cosmetology", value: 278, fill: "#1b1a2b" },
    { name: "Massage", value: 189, fill: "#0d0d15" },
  ];

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          />

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
