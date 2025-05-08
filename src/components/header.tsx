import { Search, ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <div className="p-4 flex items-center gap-2 text-[#82868C]">
      <div className="relative flex-1 max-w-xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-[#82868C]" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-white w-full pl-10 pr-4 py-2 rounded-md border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#006A05]"
        />
      </div>

      <button className="bg-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
        Sort by
    
      </button>
    </div>
  )
}
