import DashboardSideBar from "../component/dashboard/DashboardSideBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full h-[5rem] shadow-md px-5 flex items-center">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </div>
      <div className="flex">
        <div className="w-[15%]  h-screen p-4 ">
          <DashboardSideBar />
        </div>
        <main className="w-[85%] bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
