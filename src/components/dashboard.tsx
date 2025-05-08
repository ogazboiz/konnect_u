import Sidebar from "./sidebar";
import Header from "./header";
import RevenueOverview from "./revenue-overview";
import PerformanceMetrics from "./performance-metrics";
import JobOversight from "./job-oversight";
import AccountManagement from "./account-management";
import PopularTaskSpecialist from "./popular-task-specialist";
// import PopularTaskSpecialist from "./popular-task-specialist";

export default function Dashboard() {
  return (
    <div className="flex h-screen   mx-auto bg-green-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-[#F7F4F4] rounded-t-3xl overflow-auto">
          <h1 className="text-3xl font-bold text-[#070F65] mb-6">Overview</h1>

          {/* First Row: RevenueOverview and PerformanceMetrics */}
          <div className="flex flex-col lg:flex-row mb-6">
            <div className="w-full  lg:w-[53%]">
              <RevenueOverview />
            </div>
            <div className="w-full lg:w-[47%]">
              <PerformanceMetrics />
            </div>
          </div>

          {/* Second Row: JobOversight and Right Column (AccountManagement, PopularTaskSpecialist) */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <JobOversight />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <AccountManagement />
              <PopularTaskSpecialist />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}