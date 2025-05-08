"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";

interface Job {
  name: string;
  title: string;
  budget: string;
  description: string;
  location: string;
}

export default function JobOversight() {
  const [showDateDropdown, setShowDateDropdown] = useState<boolean>(false);
  const [showJobsDropdown, setShowJobsDropdown] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("Last 1 Week");
  const [selectedJobType, setSelectedJobType] = useState<string>("Technological jobs");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const toggleDateDropdown = () => {
    setShowDateDropdown((prev) => !prev);
    if (showJobsDropdown) setShowJobsDropdown(false);
  };

  const toggleJobsDropdown = () => {
    setShowJobsDropdown((prev) => !prev);
    if (showDateDropdown) setShowDateDropdown(false);
  };

  const selectDate = (date: string) => {
    setSelectedDate(date);
    setShowDateDropdown(false);
  };

  const selectJobType = (type: string) => {
    setSelectedJobType(type);
    setShowJobsDropdown(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const mockJobs: Job[] = [
          {
            name: "Mack Zuckerberg",
            title: "Install Security Cameras for TechHub",
            budget: "N4000",
            description:
              "A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables through walls and configuring the security system.",
            location: "Lagos, Nigeria",
          },
          {
            name: "Mack Zuckerberg",
            title: "Install Security Cameras for TechHub",
            budget: "N4000",
            description:
              "A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables through walls and configuring the security system.",
            location: "Lagos, Nigeria",
          },
        ];
        setJobs(mockJobs);
        setLoading(false);
      } catch (err) {
        setError("Failed to load jobs");
        setLoading(false);
        console.error("Error loading jobs:", err);
      }
    }, 1000);
  }, []);

  return (
    <Card className="bg-white rounded-lg shadow-sm border-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl sm:text-2xl font-medium text-[#1A237E] opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Job Oversight
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for Jobs"
              className="w-full pl-4 pr-4 py-2 rounded-md border-[1.5px] text-[#070F65] border-[#070F65] focus:outline-none focus:ring-2 focus:ring-[#1A237E] text-sm sm:text-base opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
          </div>

          <button 
            className="border-[1.5px] border-[#070F65] px-3 sm:px-4 py-2 rounded-md flex items-center justify-center gap-2 text-[#070F65] text-sm sm:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Filter
          </button>

          <div className="relative">
            <button
              className="border-[1.5px] border-[#070F65] px-3 sm:px-4 py-2 rounded-md flex items-center justify-center gap-2 text-[#1A237E] text-sm sm:text-base opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
              onClick={toggleDateDropdown}
            >
              Date
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showDateDropdown && (
              <div className="absolute z-10 left-0 sm:left-auto sm:right-0 mt-1 w-36 sm:w-40 bg-white border-[1.5px] border-[#1A237E] rounded-md shadow-lg opacity-0 animate-fade-in" 
                   style={{ animationDelay: "0s" }}>
                {["Last 1 Week", "Last 2 Weeks", "Last Month", "Last 5 Months"].map(
                  (date, i) => (
                    <div
                      key={date}
                      className="p-2 hover:bg-gray-100 border-y border-[#1A237E] cursor-pointer flex items-center opacity-0 animate-fade-in"
                      style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                      onClick={() => selectDate(date)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedDate === date
                            ? "border-[#1A237E] bg-[#1A237E]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedDate === date && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="ml-2 text-xs sm:text-sm">{date}</span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="border-[1.5px] border-[#070F65] px-3 sm:px-4 py-2 rounded-md flex items-center justify-center gap-2 text-[#1A237E] text-sm sm:text-base opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
              onClick={toggleJobsDropdown}
            >
              Jobs
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showJobsDropdown && (
              <div className="absolute z-10 left-0 sm:left-auto sm:right-0 mt-1 w-36 sm:w-40 border-[1.5px] border-[#1A237E] rounded-lg bg-white shadow-lg opacity-0 animate-fade-in"
                   style={{ animationDelay: "0s" }}>
                {[
                  "Technological jobs",
                  "Business jobs",
                  "Handy jobs",
                  "Scientific jobs",
                ].map((job, i) => (
                  <div
                    key={job}
                    className="p-2 hover:bg-gray-100 border-y border-[#1A237E] cursor-pointer flex items-center opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                    onClick={() => selectJobType(job)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedJobType === job
                          ? "border-[#1A237E] bg-[#1A237E]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedJobType === job && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="ml-2 text-xs sm:text-sm">{job}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="text-center text-[#070F65] py-4 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            Loading jobs...
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-4 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            {error}
          </div>
        ) : (
          jobs.map((job, index) => (
            <JobCard
              key={index}
              name={job.name}
              title={job.title}
              budget={job.budget}
              description={job.description}
              location={job.location}
              index={index}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

interface JobCardProps {
  name: string;
  title: string;
  budget: string;
  description: string;
  location: string;
  index: number;
}

function JobCard({ name, title, budget, description, location, index }: JobCardProps) {
  return (
    <div 
      className=" pb-4 mb-4 last:border-b-0 last:mb-0 opacity-0 animate-fade-in"
      style={{ animationDelay: `${1.1 + index * 0.15}s` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs relative bg-cover bg-center opacity-0 animate-bounce-in"
          style={{ 
            backgroundImage: "url('/EllipseAvatar4.svg')",
            animationDelay: `${1.2 + index * 0.15}s`
          }}
        >
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white opacity-0 animate-fade-in"
               style={{ animationDelay: `${1.3 + index * 0.15}s` }} />
        </div>
        <div className="flex-1">
          <h3 className="text-[#070F65] font-semibold text-sm sm:text-base opacity-0 animate-fade-in"
              style={{ animationDelay: `${1.1 + index * 0.15}s` }}>
            {name}
          </h3>
          <h4 className="text-[#070F65] font-bold text-base sm:text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${1.15 + index * 0.15}s` }}>
            {title}
          </h4>
          <div className="text-[12px] sm:text-[13px] text-[#070F65] opacity-0 animate-fade-in"
               style={{ animationDelay: `${1.2 + index * 0.15}s` }}>
            Budget: {budget}
          </div>
          <p className="text-[10px] sm:text-sm text-[#070F65]/50 mt-1 opacity-0 animate-fade-in"
             style={{ animationDelay: `${1.25 + index * 0.15}s` }}>
            {description}
          </p>
          <div className="mt-1 opacity-0 animate-fade-in"
               style={{ animationDelay: `${1.3 + index * 0.15}s` }}>
            <a href="#" className="text-green-600 text-xs sm:text-sm">
              View More...
            </a>
          </div>
          <div className="flex items-center gap-4 mt-2 opacity-0 animate-fade-in"
               style={{ animationDelay: `${1.35 + index * 0.15}s` }}>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
            <button className="text-gray-400">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}