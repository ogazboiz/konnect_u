import Sidebar from "./sidebar";
import Header from "./header";
import RevenueOverview from "./revenue-overview";
import PerformanceMetrics from "./performance-metrics";
import JobOversight from "./job-oversight";
import AccountManagement from "./account-management";
import PopularTaskSpecialist from "./popular-task-specialist";

export default function Dashboard() {
  return (
    <div className="flex h-screen mx-auto bg-green-700">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 p-3 lg:p-6 bg-[#F7F4F4] rounded-t-3xl overflow-x-hidden">
          <h1 className="text-xl lg:text-3xl font-bold text-[#070F65] mb-3 lg:mb-6">
            Overview
          </h1>

          {/* First Row: RevenueOverview and PerformanceMetrics */}
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 mb-3 lg:mb-6">
            <div className="w-full lg:w-[53%] overflow-x-hidden">
              <RevenueOverview />
            </div>
            <div className="w-full z-50 mt-[-40px] lg:w-[47%] overflow-x-hidden">
              <PerformanceMetrics />
            </div>
          </div>

            {/* Second Row: JobOversight and AccountManagement + PopularTaskSpecialist */}
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            <div className="w-full lg:w-1/2 overflow-x-hidden">
              <JobOversight />
            </div>
            <div className="w-full lg:w-1/2 space-y-3 lg:space-y-6 overflow-x-hidden">
              <AccountManagement />
              <PopularTaskSpecialist />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}