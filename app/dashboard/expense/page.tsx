import ExpenseOverview from "@/app/component/dashboard/ExpenseOverview";
import ExpenseSource from "@/app/component/dashboard/ExpenseSource";

const page = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col gap-8 mt-10">
      <ExpenseOverview />
      <ExpenseSource />
    </div>
  );
};

export default page;
