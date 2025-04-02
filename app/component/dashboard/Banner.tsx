import { RiBankCardLine } from "react-icons/ri";
import { LuHandCoins } from "react-icons/lu";
import { LuWalletMinimal } from "react-icons/lu";
const Banner = () => {
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
          <p className="text-xl font-semibold text-black">$91,000</p>
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
          <p className="text-xl font-semibold text-black">$98,000</p>
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
          <p className="text-xl font-semibold text-black">$78000</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
