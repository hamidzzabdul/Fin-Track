import { MdOutlineDashboard } from "react-icons/md";
import { LuHandCoins } from "react-icons/lu";
import { LuWalletMinimal } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";

const DashboardSideBar = () => {
  return (
    <div className="w-full flex gap-6 flex-col">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-purple-200" />
        <h2 className="font-semibold text-sm">Mike Williams</h2>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <Link
          href={"/dashboard"}
          className="w-full p-3 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-md cursor-pointer flex items-center  gap-2 group"
        >
          <MdOutlineDashboard className="text-black group-hover:text-white duration-300 transition-all text-xl" />
          <p className="text-base font-bold">Dashboard</p>
        </Link>
        <Link
          href={"/dashboard/income"}
          className="w-full p-3 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-md cursor-pointer flex items-center text-sm font-bold gap-2 group"
        >
          <LuWalletMinimal className="text-black group-hover:text-white duration-300 transition-all text-xl" />
          <p className="text-base font-bold">Income</p>
        </Link>
        <Link
          href={"/dashboard/expense"}
          className="w-full p-3 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-md cursor-pointer flex items-center text-sm font-bold gap-2 group"
        >
          <LuHandCoins className="text-black group-hover:text-white duration-300 transition-all text-xl" />
          <p className="text-base font-bold">Expense</p>
        </Link>
        <Link
          href={"/dashboard"}
          className="w-full p-3 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-md cursor-pointer flex items-center text-sm font-bold gap-2 group"
        >
          <MdOutlineLogout className="text-black group-hover:text-white duration-300 transition-all text-xl" />
          <p className="text-base font-bold">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
