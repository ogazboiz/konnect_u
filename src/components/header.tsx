import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 p-2 sm:p-3 lg:p-4 text-[#82868C]">
      <div className="relative w-full sm:max-w-md lg:max-w-xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
          <Search className="h-3 w-3 sm:h-4 sm:w-4 text-[#82868C] flex-shrink-0" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-white w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-md border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#006A05] text-sm sm:text-base box-border"
        />
      </div>

      <button className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto box-border">
        Sort by
      </button>
    </div>
  );
}