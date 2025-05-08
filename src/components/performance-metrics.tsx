import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PerformanceMetrics() {
  return (
    <Card className="bg-white rounded-lg shadow-sm border-0">
      <CardHeader className="pb-2 px-3 lg:px-4">
        <CardTitle className="text-lg lg:text-2xl font-bold text-[#1A237E]">
          Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 lg:p-4">
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6">
       
          <div className="space-y-3 lg:space-y-6">
            {/* Total User Section */}
            <div className="bg-[#F7F4F4] rounded-lg p-3 lg:p-4">
              <div className="text-xs lg:text-sm text-[#070F65] font-medium mb-1">
                Total User
              </div>
              <div className="flex items-center gap-1">
                <div className="text-xl lg:text-3xl font-bold text-[#070F65]">
                  2k
                </div>
                <div className="text-xs lg:text-sm text-[#070F65]">users</div>
                <Image
                  src="/up.svg"
                  alt="Up arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4 lg:w-5 lg:h-5"
                />
              </div>
              <div className="mt-3 lg:mt-4">
                <div className="text-xs lg:text-sm text-[#1A237E] mb-1">
                  Monthly Subscribers
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1A237E] h-2 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-center mt-1">
                  <div className="bg-[#FFB400] text-[10px] lg:text-xs px-2 lg:px-3 py-1 rounded-md">
                    20subs
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="flex gap-3 lg:gap-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-3xl bg-[#FF9800] flex items-center justify-center text-white font-bold text-xs lg:text-base">
                65%
              </div>
              <div className="bg-[#FCF8F8] px-2 lg:px-3 py-1 rounded-md flex flex-col items-center gap-1 text-[#1A237E]">
                <div className="flex -space-x-2">
                  <img
                    src="/EllipseAvatar1.svg"
                    className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 border-white"
                    alt="Avatar 1"
                  />
                  <img
                    src="/EllipseAvatar2.png"
                    className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 border-white"
                    alt="Avatar 2"
                  />
                  <img
                    src="/EllipseAvatar3.svg"
                    className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 border-white"
                    alt="Avatar 3"
                  />
                </div>
                <span className="text-[9px] lg:text-[10px]">+1k people rated</span>
                <div className="flex text-[#FFA000] text-xs lg:text-base mt-1 gap-0">
                  ☆☆☆☆
                </div>
              </div>
            </div>
          </div>

       
          <div className="space-y-3 lg:space-y-6">
            {/* Total Resolved Disputes */}
            <div className="bg-gray-50 rounded-lg p-3 lg:p-4">
              <div className="text-xs lg:text-sm text-[#1A237E] font-medium mb-1">
                Total Resolved Disputes
              </div>
              <div className="flex items-center gap-1">
                <div className="text-xl lg:text-3xl font-bold text-[#1A237E]">
                  25%
                </div>
                <div className="text-xs lg:text-sm text-gray-600">disputes</div>
                <Image
                  src="/up.svg"
                  alt="Up arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4 lg:w-5 lg:h-5"
                />
              </div>
            </div>

            {/* Total Unresolved Disputes */}
            <div className="bg-white rounded-lg border-2 p-3 lg:p-4">
              <div className="text-xs lg:text-sm text-[#1A237E] font-medium mb-1">
                Total Unresolved Disputes
              </div>
              <div className="flex items-center gap-1">
                <div className="text-xl lg:text-3xl font-bold text-[#1A237E]">
                  75%
                </div>
                <div className="text-xs lg:text-sm text-gray-600">disputes</div>
                <Image
                  src="/down.png"
                  alt="Down arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4 lg:w-5 lg:h-5"
                />
              </div>
              <div className="mt-3 lg:mt-4">
                <div className="grid grid-cols-3 px-1 text-[9px] lg:text-[12px] mb-2 text-[#000000]">
                  <div className="font-[420]">User name</div>
                  <div className="font-normal text-center">Issues</div>
                  <div className="font-normal text-right">Time</div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center gap-1 lg:gap-2">
                      <Image
                        src="/EllipseAvatar1.svg"
                        alt="Avatar 1"
                        width={16}
                        height={16}
                        className="w-4 h-4 lg:w-5 lg:h-5"
                      />
                      <div className="text-[9px] lg:text-[10px] truncate">
                        Jane Markus
                      </div>
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-center truncate">
                      My task specific...
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-right">
                      Jan 14 2025
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center gap-1 lg:gap-2">
                      <Image
                        src="/EllipseAvatar2.png"
                        alt="Avatar 2"
                        width={16}
                        height={16}
                        className="w-4 h-4 lg:w-5 lg:h-5"
                      />
                      <div className="text-[9px] lg:text-[10px] truncate">
                        Ngene Peter
                      </div>
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-center truncate">
                      My task specific...
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-right">
                      Jan 14 2025
                    </div>
                  </div>
                </div>
                <div className="text-right mt-2">
                  <a href="#" className="text-green-600 text-[9px] lg:text-[10px]">
                    View more queries
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}