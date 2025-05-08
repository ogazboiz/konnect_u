"use client";

import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function RevenueOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState("For every month");

  const monthlyData = [
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
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-bold text-indigo-900">Revenue Overview</CardTitle>
        <button
          className="border border-indigo-900 text-indigo-900 rounded-full px-4 py-1 text-sm flex items-center"
          onClick={() => setSelectedPeriod(prev => prev === "For every month" ? "For this year" : "For every month")}
        >
          {selectedPeriod}
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="relative h-[12rem] lg:h-[14rem] w-full">
          {/* Y-axis with labels and horizontal ticks */}
          <div className="absolute left-0 top-0 h-4/5 w-12 flex flex-col justify-between text-sm text-indigo-900 pt-2 pb-6 pr-2">
            {[100, 75, 50, 25, 0].map((value) => (
              <div key={`y-tick-${value}`} className="flex items-start">
                <span className="block mr-2 w-full text-left">{value}</span>
                <div className="w-[10px] h-[2px] bg-indigo-900 mt-2"></div>
              </div>
            ))}
          </div>

          {/* Main chart area */}
          <div className="absolute left-10 right-4 top-0 bottom-12 border border-gray-200">
            <div className="w-full h-full flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={`hline-${i}`} className="w-full border-t border-gray-200"></div>
              ))}
            </div>
            
            <div className="absolute inset-0">
              <div className="w-full h-full grid grid-cols-12">
                {monthlyData.map((month, i) => (
                  <div key={i} className="relative h-full border-r border-gray-200">
                    <div className="absolute inset-0 flex items-end px-1">
                      <div className="w-full h-full flex items-end justify-around">
                        <div 
                          className="w-5/12 bg-yellow-400" style={{ height: `${month.yellow}%` }}    />
                        <div className="w-5/12 bg-blue-500"   style={{ height: `${month.blue}%` }}    />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-[2px] h-3 bg-indigo-900 transform translate-y-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue trend indicators */}
          <div className="absolute top-6 left-1/4 bg-red-600 text-white px-3 py-1 rounded-md text-sm">
            A fall in revenue
          </div>
          <div className="absolute top-6 right-1/4 bg-green-600 text-white px-3 py-1 rounded-md text-sm">
            A rise in revenue
          </div>

          {/* X-axis month labels */}
          <div className="absolute bottom-0 left-10 right-4 h-12">
            <div className="grid grid-cols-12 h-full">
              {monthlyData.map((month, i) => (
                <div key={i} className="relative flex items-end justify-center text-xs text-indigo-900 pb-1">
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