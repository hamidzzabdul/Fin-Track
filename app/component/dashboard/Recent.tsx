"use client";
import {
  fetchRecentTransactions,
  formatCurrency,
  formatDate,
} from "@/app/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const Recent = () => {
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recent-transactions"],
    queryFn: () => fetchRecentTransactions(8),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading transactions</div>;

  return (
    <div className="w-full h-full rounded-md shadow-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Recent Transaction</h3>
        <Link
          href={"/dashboard"}
          className="px-4 py-2 text-xs font-semibold bg-gray-100 flex items-center gap-2 cursor-pointer rounded-md"
        >
          <p className="text-gray-400">See All</p>
          <BiRightArrowAlt className="text-gray-500 text-base" />
        </Link>
      </div>

      <div className="flex flex-col my-6 gap-6">
        {transactions?.map((transaction) => (
          <div
            className="flex items-center justify-between px-2"
            key={transaction.id}
          >
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100">
                <span className="text-2xl">{transaction.emoji}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold">{transaction.name}</h3>
                <p className="text-xs text-gray-500">
                  {formatDate(transaction.date)}
                </p>
              </div>
            </div>

            {transaction.type === "income" ? (
              <div className="px-3 py-2 rounded-lg bg-green-100 flex items-center gap-2">
                <p className="text-xs text-green-600">
                  {formatCurrency(transaction.amount)}
                </p>
                <FaArrowTrendUp className="text-green-600 text-xs" />
              </div>
            ) : (
              <div className="px-3 py-2 rounded-lg bg-red-100 flex items-center gap-2">
                <p className="text-xs text-red-600">
                  {formatCurrency(transaction.amount)}
                </p>
                <FaArrowTrendDown className="text-red-600 text-xs" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
