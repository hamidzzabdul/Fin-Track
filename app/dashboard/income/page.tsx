import IncomeOverview from "@/app/component/dashboard/IncomeOverview";
import IncomeSources from "@/app/component/dashboard/IncomeSources";

const page = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col gap-8 mt-10">
      <IncomeOverview />
      <IncomeSources />
    </div>
  );
};

export default page;
