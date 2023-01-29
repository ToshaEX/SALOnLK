import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProfitChart() {
  const data = [
    { name: "Jan", Profit: "12003" },
    { name: "Feb", Profit: "14900" },
    { name: "March", Profit: "13567" },
    { name: "April", Profit: "16045" },
    { name: "May", Profit: "17948" },
    { name: "July", Profit: "11567" },
    { name: "June", Profit: "15045" },
  ];
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: -15,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis
            stroke="gray"
            style={{
              fontSize: "13px",
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Profit"
            stroke="#8884d8"
            fill="#f7f9fc"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
