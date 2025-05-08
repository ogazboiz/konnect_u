"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";


interface User {
  id: string;
  name: string;
  status: string;
  accountStatus: "Activated" | "Deactivated";
  icon: string;
  buttonText: "Activate" | "Deactivate";
  buttonColor: string;
}

export default function AccountManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const mockUsers: User[] = [
          {
            id: "#CCCCS45",
            name: "Patrick James",
            status: "Professional",
            accountStatus: "Deactivated",
            icon: "/stop.svg",
            buttonText: "Activate",
            buttonColor: "bg-[#006A05]",
          },
          {
            id: "#CCCCS46",
            name: "Patrick James",
            status: "Professional",
            accountStatus: "Activated",
            icon: "/activate.svg",
            buttonText: "Deactivate",
            buttonColor: "bg-[#B80405]",
          },
          {
            id: "#CCCCS47",
            name: "Patrick James",
            status: "Professional",
            accountStatus: "Deactivated",
            icon: "/stop.svg",
            buttonText: "Activate",
            buttonColor: "bg-[#006A05]",
          },
          {
            id: "#CCCCS48",
            name: "Patrick James",
            status: "Professional",
            accountStatus: "Activated",
            icon: "/activate.svg",
            buttonText: "Activate",
            buttonColor: "bg-[#006A05]",
          },
        ];
        setUsers(mockUsers);
        setLoading(false);
      } catch (err) {
        console.error("Error loading users:", err);
        setError("Failed to load users");
        setLoading(false);
      }
    }, 1000);
  }, []);

  const toggleAccountStatus = (userId: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          const isActivated = user.accountStatus === "Activated";
          return {
            ...user,
            accountStatus: isActivated ? "Deactivated" : "Activated",
            icon: isActivated ? "/stop.svg" : "/activate.svg",
            buttonText: isActivated ? "Activate" : "Deactivate",
            buttonColor: isActivated ? "bg-[#006A05]" : "bg-[#B80405]",
          };
        }
        return user;
      })
    );
  };

  return (
    <Card className="bg-white rounded-lg shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold text-[#1A237E]">
          Account Management
        </CardTitle>
        <a href="#" className="text-xs sm:text-sm text-green-600 flex items-center whitespace-nowrap">
          View More
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        {loading ? (
          <div className="text-center text-[#1A237E] py-4">Loading users...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-4">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[554px]">
              <thead>
                <tr className="text-left text-xs sm:text-sm text-[#1A237E]">
                  <th className="pb-4 font-medium whitespace-nowrap">User ID</th>
                  <th className="pb-4 font-medium whitespace-nowrap">Name of user</th>
                  <th className="pb-4 font-medium whitespace-nowrap">User status</th>
                  <th className="pb-4 font-medium whitespace-nowrap">Status</th>
                  <th className="pb-4 font-medium whitespace-nowrap pr-4">
                    Admin control
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                {users.map((user, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-4 whitespace-nowrap">{user.id}</td>
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/EllipseAvatar4.svg"
                          alt="User avatar"
                          width={16}
                          height={16}
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        />
                        {user.name}
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                          >
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
                      <div
                        className={`${
                          user.accountStatus === "Activated"
                            ? "bg-[#006A05]"
                            : "bg-[#B80405]"
                        } text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 w-fit`}
                      >
                        <Image
                          src={user.icon}
                          alt="Status icon"
                          width={12}
                          height={12}
                          className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                        />
                        {user.accountStatus}
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap pr-4">
                      <button
                        onClick={() => toggleAccountStatus(user.id)}
                        className={`${user.buttonColor} text-white text-[10px] sm:text-xs w-full px-3 sm:px-4 py-1 rounded-sm whitespace-nowrap`}
                      >
                        {user.buttonText}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}