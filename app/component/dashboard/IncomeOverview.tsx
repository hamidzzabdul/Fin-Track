"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const generateMockData = () => {
  const data = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    data.push({
      date: date,
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      dateStr: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      income: Math.floor(Math.random() * 2000) + 500,
      expenses: Math.floor(Math.random() * 1500) + 300,
    });
  }
  return data;
};

interface IncomeOverviewProps {
  openModal: () => void;
  type: "income" | "expense";
}

const IncomeOverview = ({ openModal }: IncomeOverviewProps) => {
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const allData = generateMockData();

  const periods = [];

  for (let i = 0; i < allData.length; i += 10) {
    periods.push(allData.slice(i, i + 10));
  }
  const currentData = periods[currentPeriod] || [];
  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold ">Income Overview</h3>
          <p className="text-xs text-gray-400">
            Track your income trends overtime and gain insights into where your
            money goes
          </p>
        </div>
        <button
          className="px-3 py-2 text-sm flex items-center gap-2 bg-green-200 text-green-600 rounded-md hover:bg-green-600 transition-all duration-200 ease-in-out cursor-pointer border-none hover:text-white "
          onClick={openModal}
        >
          <FaPlus className="text-sm" />
          Add Income
        </button>
      </div>
      <div className="w-full h-full  mt-10">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={currentData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="dateStr" tick={{ fontSize: 12 }} tickMargin={10} />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value, name) => [
                `$${value}`,
                name === "income" ? "Income" : "Expenses",
              ]}
              labelFormatter={(label) => {
                const day = currentData.find((d) => d.dateStr === label)?.day;
                return `${day}, ${label}`;
              }}
            />
            <Bar
              dataKey="income"
              name="Income"
              fill="#9333ea"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="#e9d5ff"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeOverview;
