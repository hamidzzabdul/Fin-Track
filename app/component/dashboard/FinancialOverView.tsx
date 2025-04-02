"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const FinancialOverView = () => {
  const totalBalance = 1000000;
  const totalExpense = 500000;
  const totalIncome = 300000;
  const savings = totalBalance - totalExpense;

  const data = [
    { name: "Total Income", value: totalIncome, color: "#c2410c" }, // bg-orange-700
    { name: "Total Expense", value: totalExpense, color: "#b91c1c" }, // bg-red-700
    { name: "Total Balance", value: savings, color: "#7e22ce" },
  ];
  return (
    <div className="w-full h-full rounded-md shadow-md bg-white p-4 overflow-hidden">
      <div className="flex ">
        <h3 className="text-xl font-semibold">Financial Overview</h3>
      </div>

      <div className="w-full h-[200px] mt-20 flex flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="#fff"
                  strokeWidth={4}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className=" absolute flex flex-col items-center justify-center pointer-events-none">
          <span className="text-gray-800 text-lg font-semibold">
            Total Balance
          </span>
          <span className="text-sm font-bold text-gray-800">
            ${savings.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialOverView;
