import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PerformanceMetrics() {
  return (
    <div className="pb-[20px] bg-white rounded-lg">
      <Card className="bg-white border-0 pb-0 shadow-none">
        <CardHeader className="pb-2">
          <CardTitle
            className="text-2xl font-bold text-[#1A237E] opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Performance
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column */}
        <Card className="ml-6 shadow-none border-0">
          <CardContent className="p-0">
            <div
              className="bg-[#F7F4F4] rounded-lg px-4 py-2 w-[176px] opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="text-sm text-[#070F65] font-medium mb-1">
                Total User
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl font-bold text-[#070F65]">2k</div>
                <div className="text-sm text-[#070F65]">users</div>
                <Image src="/up.svg" alt="Account icon" width={20} height={20} />
              </div>

              <div className="mt-4">
                <div className="text-sm text-[#1A237E] mb-1">
                  Monthly Subscribers
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#1A237E] h-2 rounded-full w-0 animate-grow-from-bottom"
                    style={{ animationDelay: "0.3s", width: "33.33%", animationFillMode: "forwards" }}
                  />
                </div>
                <div className="flex justify-center mt-1">
                  <div
                    className="bg-[#FFB400] text-xs px-3 py-1 rounded-md opacity-0 animate-bounce-in"
                    style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                  >
                    20subs
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-6 bg-white gap-4">
              <div
                className="w-16 h-16 rounded-3xl bg-[#FF9800] flex items-center justify-center text-white font-bold opacity-0 animate-fade-in"
                style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
              >
                65%
              </div>
              <div
                className="text-sm bg-[#FCF8F8] px-3 py-1 rounded-md opacity-0 animate-fade-in"
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                <div className="flex flex-col items-center gap-1 text-[#1A237E]">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    <img
                      src="/EllipseAvatar1.svg"
                      className="w-6 h-6 rounded-full border-2 border-white opacity-0 animate-fade-in"
                      style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
                    />
                    <img
                      src="/EllipseAvatar2.png"
                      className="w-6 h-6 rounded-full border-2 border-white opacity-0 animate-fade-in"
                      style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
                    />
                    <img
                      src="/EllipseAvatar3.svg"
                      className="w-6 h-6 rounded-full border-2 border-white opacity-0 animate-fade-in"
                      style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
                    />
                  </div>
                  <span
                    className="text-[10px] opacity-0 animate-fade-in"
                    style={{ animationDelay: "1s", animationFillMode: "forwards" }}
                  >
                    +1k people rated
                  </span>
                </div>
                <div
                  className="flex justify-center text-[#FFA000] mt-1 gap-0 opacity-0 animate-fade-in"
                  style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
                >
                  ☆☆☆☆
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right column */}
        <div className="space-y-4 rounded-lg mr-3">
          <Card
            className="bg-gray-50 py-[10px] shadow-none border-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <CardContent className="">
              <div className="text-sm text-[#1A237E] font-medium mb-1">
                Total Resolved Disputes
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl font-bold text-[#1A237E]">25%</div>
                <div className="text-sm text-gray-600">disputes</div>
                <Image src="/up.svg" alt="Account icon" width={20} height={20} />
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-white shadow-none pb-0 border-2 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <CardContent className="px-4 pt-4 pb-0">
              <div className="text-sm text-[#1A237E] font-medium mb-1">
                Total Unresolved Disputes
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl font-bold text-[#1A237E]">75%</div>
                <div className="text-sm text-gray-600">disputes</div>
                <Image src="/down.png" alt="Account icon" width={20} height={20} />
              </div>

              <div className="mt-4">
                {/* Header row */}
                <div className="grid grid-cols-3 px-1 text-[12px] mb-2 text-[#000000]">
                  <div className="font-[420]">User name</div>
                  <div className="font-normal text-center">Issues</div>
                  <div className="font-normal text-right">Time</div>
                </div>

                <div className="space-y-2">
                  {/* First row */}
                  <div
                    className="grid grid-cols-3 items-center opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                  >
                    <div className="flex items-center gap-2">
                      <Image src="/EllipseAvatar1.svg" alt="Account icon" width={20} height={20} />
                      <div className="text-[9px]">Jane Markus</div>
                    </div>
                    <div className="text-[9px] text-center truncate">My task specific...</div>
                    <div className="text-[9px] text-right">Jan 14 2025</div>
                  </div>

                  {/* Second row */}
                  <div
                    className="grid grid-cols-3 items-center opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                  >
                    <div className="flex items-center gap-2">
                      <Image src="/EllipseAvatar2.png" alt="Account icon" width={20} height={20} />
                      <div className="text-[9px]">Ngene Peter</div>
                    </div>
                    <div className="text-[9px] text-center truncate">My task specific...</div>
                    <div className="text-[9px] text-right">Jan 14 2025</div>
                  </div>
                </div>

                {/* View more link */}
                <div className="mb-2 text-right">
                  <a
                    href="#"
                    className="text-green-600 text-[9px] hover:text-green-800 transition-colors duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                  >
                    View more queries
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}