import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PopularTaskSpecialist() {
  return (
    <Card className="bg-white rounded-lg shadow-sm border-0 p-4 sm:p-6 font-sans">
      <h2 className="text-xl sm:text-2xl font-bold text-[#1A237E] mb-4">
        Popular Task Specialist
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        {/* Progress Bars */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1">
              <div className="text-xs sm:text-sm text-[#070F65] mb-1">
                Task Completion In Due Date
              </div>
              <div className="relative h-[12px] w-full sm:w-[80%] bg-gray-200 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[75%] bg-[#006A05] rounded-full flex items-center justify-end"></div>
                <span className="absolute right-2 sm:right-4 top-[-1.3px] text-[9px] sm:text-[10px] text-[#070F65] font-medium">
                  80%
                </span>
              </div>
            </div>

            <div className="flex-1">
              <div className="text-xs sm:text-sm text-[#070F65] mb-1">
                Uncompleted task
              </div>
              <div className="relative h-[12px] w-full sm:w-[80%] bg-gray-200 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/5 bg-[#B80405] rounded-full flex items-center justify-end"></div>
                <span className="absolute right-2 sm:right-4 top-[-1.3px] text-[9px] sm:text-[10px] text-[#070F65] font-medium">
                  20%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Avatars and Rating */}
        <div className="flex flex-col w-full sm:w-[30%] mx-auto bg-[#FCF8F8] items-center py-4 rounded-lg">
          <div className="flex items-center mb-1">
            <div className="flex -space-x-2 mr-1">
              <Image
                src="/EllipseAvatar5.svg"
                alt="Avatar 1"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <Image
                src="/EllipseAvatar4.svg"
                alt="Avatar 2"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <Image
                src="/EllipseAvatar1.svg"
                alt="Avatar 3"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-600">+100</span>
          </div>
          <div className="text-[10px] sm:text-xs text-[#070F65]">Most rated</div>
          <div className="flex text-[#FFB400] text-sm sm:text-base">
            ☆☆☆☆
          </div>
        </div>
      </div>
    </Card>
  );
}