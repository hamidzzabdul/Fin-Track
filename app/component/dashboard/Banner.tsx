"use client";
import { RiBankCardLine } from "react-icons/ri";
import { LuHandCoins } from "react-icons/lu";
import { LuWalletMinimal } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { fetchExpenses, fetchIncomes } from "@/app/lib/utils";

interface Expense {
  id: string;
  name: string;
  date: string;
  amount: number;
  emoji: string;
}
interface Income {
  id: string;
  name: string;
  date: string;
  amount: number;
  emoji: string;
}
const Banner = () => {
  const {
    data: incomes,
    isLoading,
    error,
  } = useQuery<Income[]>({
    queryKey: ["incomes"],
    queryFn: fetchIncomes,
  });
  const { data: expenses } = useQuery<Expense[]>({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  const totalExpense =
    expenses?.reduce((sum, expense) => sum + expense.amount, 0) || 0;
  const totalIncome =
    incomes?.reduce((sum, income) => sum + income.amount, 0) || 0;
  const totalBalance = totalIncome - totalExpense;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "KSH",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="w-full h-[100px] rounded-md shadow-md flex items-center gap-4 bg-white p-4">
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-purple-600 rounded-full">
          <RiBankCardLine className="text-white text-3xl" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-gray-400">
            Total Balance
          </span>
          <p className="text-xl font-semibold text-black">
            {formatCurrency(totalBalance)}
          </p>
        </div>
      </div>
      <div className="w-full h-[100px] rounded-md shadow-md flex items-center gap-4 bg-white p-4">
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-orange-600 rounded-full">
          <LuWalletMinimal className="text-white text-3xl" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-gray-400">
            Total Income
          </span>
          <p className="text-xl font-semibold text-black">
            {formatCurrency(totalIncome)}
          </p>
        </div>
      </div>
      <div className="w-full h-[100px] rounded-md shadow-md flex items-center gap-4 bg-white p-4">
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-red-600 rounded-full">
          <LuHandCoins className="text-white text-3xl" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-gray-400">
            Total Expenses
          </span>
          <p className="text-xl font-semibold text-black">
            {formatCurrency(totalExpense)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
