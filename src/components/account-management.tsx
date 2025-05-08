"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react";


export default function AccountManagement() {
  const [users, setUsers] = useState([
    { 
      id: "#CCCCS45", 
      name: "Patrick James", 
      status: "Professional", 
      accountStatus: "Deactivated", 
      icon: "/stop.svg",
      buttonText: "Activate",
      buttonColor: "bg-[#006A05]"
    },
    { 
      id: "#CCCCS46", 
      name: "Patrick James", 
      status: "Professional", 
      accountStatus: "Activated", 
      icon: "/activate.svg",
      buttonText: "Deactivate",
      buttonColor: "bg-[#B80405]"
    },
    { 
      id: "#CCCCS47", 
      name: "Patrick James", 
      status: "Professional", 
      accountStatus: "Deactivated", 
      icon: "/stop.svg",
      buttonText: "Activate",
      buttonColor: "bg-[#006A05]"
    },
    { 
      id: "#CCCCS48", 
      name: "Patrick James", 
      status: "Professional", 
      accountStatus: "Activated", 
      icon: "/activate.svg",
      buttonText: "Activate",
      buttonColor: "bg-[#006A05]"
    }
  ]);

  const toggleAccountStatus = (userId: string) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const isActivated = user.accountStatus === 'Activated';
        return {
          ...user,
          accountStatus: isActivated ? 'Deactivated' : 'Activated',
          icon: isActivated ? '/stop.svg' : '/activate.svg',
          buttonText: isActivated ? 'Activate' : 'Deactivate',
          buttonColor: isActivated ? 'bg-[#006A05]' : 'bg-[#B80405]'
        };
      }
      return user;
    }));
  };

  return (
    <Card className="mb-6 bg-white shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-2xl font-bold text-[#1A237E]">Account Management</CardTitle>
        <a href="#" className="text-sm text-green-600 flex items-center whitespace-nowrap">
          View More
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[554px]">
            <thead>
              <tr className="text-left text-sm text-[#1A237E]">
                <th className="pb-4 font-medium whitespace-nowrap">User ID</th>
                <th className="pb-4 font-medium whitespace-nowrap">Name of user</th>
                <th className="pb-4 font-medium whitespace-nowrap">User status</th>
                <th className="pb-4 font-medium whitespace-nowrap">Status</th>
                <th className="pb-4 font-medium whitespace-nowrap pr-4">Admin control</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4 whitespace-nowrap">{user.id}</td>
                  <td className="py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/EllipseAvatar4.svg"
                        alt="Account icon"
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      {user.name}
                    </div>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      {user.status}
                    </div>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    <div className={`${user.accountStatus === 'Activated' ? 'bg-[#006A05]' : 'bg-[#B80405]'} text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 w-fit`}>
                      <Image
                        src={user.icon}
                        alt="Status icon"
                        width={15}
                        height={15}
                        className="flex-shrink-0"
                      />
                      {user.accountStatus}
                    </div>
                  </td>
                  <td className="py-4 whitespace-nowrap pr-4">
                    <button 
                      onClick={() => toggleAccountStatus(user.id)}
                      className={`${user.buttonColor} text-white text-xs w-full px-4 py-1 rounded-sm whitespace-nowrap`}
                    >
                      {user.buttonText}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}