"use client";

import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface MonthlyData {
  month: string;
  yellow: number;
  blue: number;
}

export default function RevenueOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState<"For every month" | "For this year">("For every month");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const monthlyData: MonthlyData[] = [
    { month: "Jan", yellow: 25, blue: 40 },
    { month: "Feb", yellow: 85, blue: 55 },
    { month: "Mar", yellow: 8, blue: 60 },
    { month: "Apr", yellow: 65, blue: 58 },
    { month: "May", yellow: 55, blue: 45 },
    { month: "Jun", yellow: 58, blue: 48 },
    { month: "Jul", yellow: 60, blue: 95 },
    { month: "Aug", yellow: 42, blue: 80 },
    { month: "Sep", yellow: 55, blue: 38 },
    { month: "Oct", yellow: 55, blue: 15 },
    { month: "Nov", yellow: 8, blue: 75 },
    { month: "Dec", yellow: 20, blue: 38 },
  ];

  return (
    <Card className="bg-white rounded-lg shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 lg:px-4">
        <CardTitle className="text-lg lg:text-2xl font-bold text-indigo-900">
          Revenue Overview
        </CardTitle>
        <button
          className="border border-indigo-900 text-indigo-900 rounded-full px-2 lg:px-3 py-1 text-xs flex items-center hover:bg-indigo-50 hover:shadow-sm transition-all duration-300"
          onClick={() =>
            setSelectedPeriod((prev) =>
              prev === "For every month" ? "For this year" : "For every month"
            )
          }
        >
          {selectedPeriod}
          <ChevronDown className="ml-1 lg:ml-2 h-3 lg:h-4 w-3 lg:w-4 transition-transform duration-300 group-hover:rotate-180" />
        </button>
      </CardHeader>
      <CardContent className="p-3 lg:p-4">
        <div className="relative h-[8rem] lg:h-[14rem] w-full">
          {/* Y-axis with labels and horizontal ticks */}
          <div className="absolute left-0 top-0 h-4/5 w-8 lg:w-12 flex flex-col justify-between text-[10px] lg:text-sm text-indigo-900 pt-2 pb-4 lg:pb-6 pr-1 lg:pr-2 z-10">
            {[100, 75, 50, 25, 0].map((value, index) => (
              <div
                key={`y-tick-${value}`}
                className={`flex items-start ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="block mr-0.5 lg:mr-2 w-full text-left">{value}</span>
                <div className="w-[6px] lg:w-[10px] h-[2px] bg-indigo-900 mt-1 lg:mt-2" />
              </div>
            ))}
          </div>

          {/* Main chart area */}
          <div className="absolute left-8 lg:left-12 right-1 lg:right-4 top-0 bottom-8 lg:bottom-12 border border-gray-200 z-0">
            <div className="w-full h-full flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={`hline-${i}`} className="w-full border-t border-gray-200" />
              ))}
            </div>

            <div className="absolute inset-0">
              <div className="w-full h-full grid grid-cols-12">
                {monthlyData.map((month, i) => (
                  <div key={i} className="relative h-full border-r border-gray-200">
                    <div className="absolute inset-0 flex items-end px-0.5">
                      <div className="w-full h-full flex items-end justify-around">
                        <div
                          className={`w-5/12 bg-[#F8FB00] ${isMounted ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}
                          style={{
                            height: `${isMounted ? month.yellow : 0}%`,
                            transitionDelay: `${i * 50}ms`,
                          }}
                        />
                        <div
                          className={`w-5/12 bg-blue-500 ${isMounted ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}
                          style={{
                            height: `${isMounted ? month.blue : 0}%`,
                            transitionDelay: `${i * 50 + 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-[2px] h-2 lg:h-3 bg-indigo-900 transform translate-y-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue trend indicators */}
          <div
            className={`absolute top-3 lg:top-6 left-1/4 bg-red-600 text-white px-1 lg:px-3 py-0.5 lg:py-1 rounded-md text-[10px] lg:text-sm z-10 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all duration-300`}
            style={{ transitionDelay: "600ms" }}
          >
            A fall in revenue
          </div>
          <div
            className={`absolute top-3 lg:top-6 right-1/4 bg-green-600 text-white px-1 lg:px-3 py-0.5 lg:py-1 rounded-md text-[10px] lg:text-sm z-10 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all duration-300`}
            style={{ transitionDelay: "800ms" }}
          >
            A rise in revenue
          </div>

          {/* X-axis month labels */}
          <div className="absolute bottom-0 left-8 lg:left-12 right-1 lg:right-4 h-8 lg:h-12 z-10">
            <div className="grid grid-cols-12 h-full">
              {monthlyData.map((month, i) => (
                <div
                  key={i}
                  className={`relative flex items-end justify-center text-[9px] lg:text-xs text-indigo-900 pb-0.5 lg:pb-1 ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                  style={{ transitionDelay: `${i * 50 + 300}ms` }}
                >
                  {month.month}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}