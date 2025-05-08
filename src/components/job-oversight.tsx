"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Heart } from "lucide-react"

export default function JobOversight() {
  const [showDateDropdown, setShowDateDropdown] = useState(false)
  const [showJobsDropdown, setShowJobsDropdown] = useState(false)
  const [selectedDate, setSelectedDate] = useState("Last 1 Week")
  const [selectedJobType, setSelectedJobType] = useState("Technological jobs")

  const toggleDateDropdown = () => {
    setShowDateDropdown(!showDateDropdown)
    if (showJobsDropdown) setShowJobsDropdown(false)
  }

  const toggleJobsDropdown = () => {
    setShowJobsDropdown(!showJobsDropdown)
    if (showDateDropdown) setShowDateDropdown(false)
  }

  const selectDate = (date: string) => {
    setSelectedDate(date)
    setShowDateDropdown(false)
  }

  const selectJobType = (type: string) => {
    setSelectedJobType(type)
    setShowJobsDropdown(false)
  }

  return (
    <div className="lg:w-50% ">
    <Card className="mb-6 bg-white shadow-sm border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-medium text-[#1A237E]">Job Oversight</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for Jobs"
              className="w-full pl-4 pr-4 py-2 rounded-md border-[1.5px] text-[#070F65] border-[#070F65] focus:outline-none focus:ring-2 focus:ring-[#1A237E]"
            />
          </div>

          <button className="border-[1.5px] border-[#070F65] px-4 py-2 rounded-md flex items-center justify-center gap-2 text-[#070F65]">
            Filter
          </button>

          <div className="relative">
            <button
              className="border-[1.5px] border-[#070F65] px-4 py-2 rounded-md flex items-center justify-center gap-2 text-[#1A237E]"
              onClick={toggleDateDropdown}
            >
              Date
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="absolute z-10 left-[-100px] mt-1 w-40 bg-white border-[1.5px] border-[#1A237E]  rounded-md shadow-lg">
                {["Last 1 Week", "Last 2 Weeks", "Last Month", "Last 5 Months"].map((date) => (
                  <div
                    key={date}
                    className="p-2 hover:bg-gray-100 border-y border-[#1A237E] cursor-pointer flex items-center"
                    onClick={() => selectDate(date)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedDate === date ? "border-b-[#1A237E]  bg-[#1A237E]" : "border-gray-300"
                      }`}
                    >
                      {selectedDate === date && <div className="w-3 h-3 bg-[#1A237E] border-2 border-white rounded-full"></div>}
                    </div>
                    <span className="ml-2 text-sm">{date}</span>
                    <div className="border-b-[#1A237E] border border-b-2 "/>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="border-[1.5px] border-[#070F65] px-4 py-2 rounded-md flex items-center justify-center gap-2 text-[#1A237E]"
              onClick={toggleJobsDropdown}
            >
              Jobs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="absolute z-10 left-[20px] mt-1 w-40 border-[1.5px] border-[#1A237E] rounded-lg bg-white  shadow-lg">
                {["Technological jobs", "Business jobs", "Handy jobs", "Scientific jobs"].map((job) => (
                  <div
                    key={job}
                    className="p-2  hover:bg-gray-100 border-y border-[#1A237E] cursor-pointer flex items-center"
                    onClick={() => selectJobType(job)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedJobType === job ? "border-[#1A237E] bg-[#1A237E]" : "border-gray-300"
                      }`}
                    >
                      {selectedJobType === job && <div className="w-3 h-3 bg-[#1A237E] border-2 border-white rounded-full"><div className=""> </div></div>}
                    </div>
                    <span className="ml-2 text-sm">{job}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <JobCard
          name="Mack Zuckerberg"
          title="Install Security Cameras for TechHub"
          budget="N4000"
          description="A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables through walls and configuring the security system."
          location="Lagos, Nigeria"
        />

        <JobCard
          name="Mack Zuckerberg"
          title="Install Security Cameras for TechHub"
          budget="N4000"
          description="A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables through walls and configuring the security system."
          location="Lagos, Nigeria"
        />
      </CardContent>
    </Card>
    </div>
  )
}

interface JobCardProps {
  name: string
  title: string
  budget: string
  description: string
  location: string
}

function JobCard({ name, title, budget, description, location }: JobCardProps) {
  return (
    <div className="">
      <div className="flex items-start gap-3 pb-6 mb-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs relative  bg-cover bg-center"  style={{ backgroundImage: "url('/EllipseAvatar4.svg')" }}>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          
        </div>
        <div className="flex-1">
          <h3 className="text-[#070f65] font-semibold">{name}</h3>
          <h4 className="text-[#070f65] font-bold text-lg">{title}</h4>
          <div className="text-[13px] text-[#070f65]">Budget: {budget}</div>
          <p className="text-[10px] text-[#070f65]/50 mt-1">{description}</p>
          <div className="mt-1">
            <a href="#" className="text-green-600 text-sm">
              View More...
            </a>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-sm text-gray-500">
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
   
  )
}
