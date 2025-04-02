import { redirect } from "next/navigation";
import Banner from "../component/dashboard/Banner";
import FinancialOverView from "../component/dashboard/FinancialOverView";
import Recent from "../component/dashboard/Recent";

import { auth } from "@/lib/auth";

const Dashboard = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="w-full h-[100vh] overflow-scroll bg-gray-100 p-4 flex-col pt-6">
      <div className="w-[95%] mx-auto flex flex-col gap-8">
        <Banner />
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="w-full h-full">
            <Recent />
          </div>
          <div className="w-full h-full">
            <FinancialOverView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
