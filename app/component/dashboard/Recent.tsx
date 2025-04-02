import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const Recent = () => {
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
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">Shipping</h3>
              <p className="text-xs text-gray-500">17th Feb 2025</p>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-red-100 flex items-center gap-2">
            <p className="text-xs text-red-600">-$400</p>
            <FaArrowTrendDown className="text-red-600 text-xs" />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">Travel</h3>
              <p className="text-xs text-gray-500">17th Feb 2025</p>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-red-100 flex items-center gap-2">
            <p className="text-xs text-red-600">-$400</p>
            <FaArrowTrendUp className="text-red-600 text-xs" />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">Salary</h3>
              <p className="text-xs text-gray-500">17th Feb 2025</p>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-green-100 flex items-center gap-2">
            <p className="text-xs text-green-600">-$20,000</p>
            <FaArrowTrendDown className="text-green-600 text-xs" />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">Electricity</h3>
              <p className="text-xs text-gray-500">17th Feb 2025</p>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-red-100 flex items-center gap-2">
            <p className="text-xs text-red-600">-$200</p>
            <FaArrowTrendDown className="text-red-600 text-xs" />
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">Load Repayment</h3>
              <p className="text-xs text-gray-500">17th Feb 2025</p>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-red-100 flex items-center gap-2">
            <p className="text-xs text-red-600">-$800</p>
            <FaArrowTrendDown className="text-red-600 text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
