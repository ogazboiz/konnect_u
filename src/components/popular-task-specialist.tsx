"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PopularTaskSpecialist() {
  const [progressWidth, setProgressWidth] = useState({
    completed: 0,
    uncompleted: 0
  });

  useEffect(() => {

    setTimeout(() => {
      setProgressWidth({
        completed: 75,
        uncompleted: 20
      });
    }, 300);
  }, []);

  return (
    <Card className="bg-white shadow-sm border-0 p-2 sm:p-3 lg:p-4 font-sans opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      {/* Header row with title on left and avatars/rating on right */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4 lg:gap-0 mb-3 sm:mb-4">
        <div className="w-full opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Left side - Title */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A237E] mb-2 sm:mb-3 lg:mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Popular Task Specialist
          </h2>
          {/* Progress bars */}
          <div className="w-full sm:w-[70%] lg:w-[80%]">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-xs sm:text-sm text-[#070F65] mb-1">
                  Task Completion In Due Date
                </div>
                <div className="relative h-[10px] sm:h-[12px] w-full sm:w-[80%] bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-[#006A05] rounded-full flex items-center justify-end opacity-0 animate-grow-from-bottom" 
                    style={{ 
                      width: `${progressWidth.completed}%`,
                      animationDelay: "0.5s"
                    }}
                  />
                  <span className="absolute right-2 sm:right-4 top-[-1px] sm:top-[-1.3px] text-[8px] sm:text-[10px] text-[#070F65] font-medium opacity-0 animate-fade-in"
                        style={{ animationDelay: "0.7s" }}>
                    80%
                  </span>
                </div>
              </div>

              <div className="flex-1 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-xs sm:text-sm text-[#070F65] mb-1">
                  Uncompleted task
                </div>
                <div className="relative h-[10px] sm:h-[12px] w-full sm:w-[80%] bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-[#B80405] rounded-full flex items-center justify-end opacity-0 animate-grow-from-bottom"
                    style={{ 
                      width: `${progressWidth.uncompleted}%`,
                      animationDelay: "0.7s"
                    }}
                  />
                  <span className="absolute right-2 sm:right-4 top-[-1px] sm:top-[-1.3px] text-[8px] sm:text-[10px] text-[#070F65] font-medium opacity-0 animate-fade-in"
                        style={{ animationDelay: "0.9s" }}>
                    20%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side - Avatars and rating */}
        <div className="flex flex-col py-2 sm:py-3 lg:py-4 w-full sm:w-[40%] lg:w-[30%] mx-auto bg-[#FCF8F8] items-center opacity-0 animate-fade-in"
             style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center mb-1 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="flex -space-x-1 sm:-space-x-2 mr-1">
              <Image
                src="/EllipseAvatar5.svg"
                alt="Account icon"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 opacity-0 animate-bounce-in"
                style={{ animationDelay: "1s" }}
              />
              <Image
                src="/EllipseAvatar4.svg"
                alt="Account icon"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 opacity-0 animate-bounce-in"
                style={{ animationDelay: "1.1s" }}
              />
              <Image
                src="/EllipseAvatar1.svg"
                alt="Account icon"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 opacity-0 animate-bounce-in"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: "1.3s" }}>+100</span>
          </div>
          <div className="text-[10px] sm:text-xs text-[#070F65] whitespace-nowrap opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
            Most rated
          </div>
          <div className="flex text-[#FFB400] text-xs sm:text-sm lg:text-base opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            ☆ ☆ ☆ ☆
          </div>
        </div>
      </div>
    </Card>
  );
}