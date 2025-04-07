import DashboardSideBar from "../component/dashboard/DashboardSideBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="w-full h-[4rem] shadow-md px-5 flex items-center sticky top-0 bg-white z-10">
        <h1 className="text-xl font-bold">Expense Tracker</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[15%] p-4 bg-white sticky top-[3rem] h-[calc(100vh-5rem)] ">
          <DashboardSideBar />
        </div>
        <main className="w-[85%] overflow-y-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
