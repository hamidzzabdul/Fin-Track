import { FaArrowTrendDown } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { fetchExpenses } from "@/app/lib/utils";

interface Expense {
  id: string;
  name: string;
  date: string;
  amount: number;
}

const ExpenseSource = () => {
  const {
    data: expenses,
    isLoading,
    error,
  } = useQuery<Expense[]>({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div className="w-full h-full rounded-md bg-white shadow-sm py-4 px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold ">Expense Sources</h3>

        <button className="flex items-center cursor-pointer text-sm gap-2 bg-gray-100 px-4 py-2 rounded-md">
          <RiDownload2Fill className="text-base text-gray-500" />
          Download
        </button>
      </div>

      <div className="w-full mt-4 grid md:grid-cols-2 gap-6">
        {expenses?.map((expense) => (
          <div
            className="flex items-center justify-between px-2 hover:bg-gray-100 rounded-md transition-all duration-300 p-2 cursor-pointer group"
            key={expense.id}
          >
            <div className="flex items-center gap-3">
              <div className="w-[55px] h-[55px] rounded-full flex justify-center items-center bg-gray-100 border">
                <p className="text-2xl">{expense.emoji || "💰"}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold capitalize">
                  {expense.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {formatDate(expense.date)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRegTrashAlt className="text-sm text-red-400 hidden group-hover:block transition-all duration-300 ease-in-out" />
              <div className="px-3 py-2 rounded-lg bg-red-100 flex items-center gap-2">
                <p className="text-xs text-red-600">-${expense.amount}</p>
                <FaArrowTrendDown className="text-red-600 text-xs" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseSource;
