import { FaArrowTrendUp } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";

const data = [
  {
    image: "",
    name: "salary",
    date: "18th March 2025",
    amount: "20,000",
  },
  {
    image: "",
    name: "travel",
    date: "02th Jan 2025",
    amount: "1000",
  },
  {
    image: "",
    name: "Web",
    date: "18th feb 2025",
    amount: "1800",
  },
  {
    image: "",
    name: "Movie",
    date: "18th march 2025",
    amount: "20,000",
  },
  {
    image: "",
    name: "Food",
    date: "01th jan 2025",
    amount: "20,000",
  },
  {
    image: "",
    name: "App dev",
    date: "17th april 2025",
    amount: "20,000",
  },
];

const IncomeSources = () => {
  return (
    <div className="w-full h-[400px] rounded-md bg-white shadow-sm py-4 px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold ">Income Sources</h3>

        <button className="flex items-center cursor-pointer text-sm gap-2 bg-gray-100 px-4 py-2 rounded-md">
          <RiDownload2Fill className="text-base text-gray-500" />
          Download
        </button>
      </div>

      <div className="w-full mt-4 grid md:grid-cols-2 gap-6">
        {data.map((income, index) => (
          <div
            className="flex items-center justify-between px-2 hover:bg-gray-100 rounded-md transition-all duration-300 p-2 cursor-pointer group"
            key={index}
          >
            <div className="flex items-center gap-3">
              <div className="w-[55px] h-[55px] rounded-full flex justify-center items-center bg-gray-100 border"></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold capitalize">
                  {income.name}
                </h3>
                <p className="text-xs text-gray-500">{income.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRegTrashAlt className="text-sm text-red-400 hidden group-hover:block transition-all duration-300 ease-in-out" />
              <div className="px-3 py-2 rounded-lg bg-green-100 flex items-center gap-2">
                <p className="text-xs text-green-600">${income.amount}</p>
                <FaArrowTrendUp className="text-green-600 text-xs" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeSources;
