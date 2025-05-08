import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Check, X } from "lucide-react"
import Image from "next/image"

export default function AccountManagement() {
  return (
    <Card className="mb-6 bg-white shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-bold text-[#1A237E]">Account Management</CardTitle>
        <a href="#" className="text-sm text-green-600 flex items-center">
          View More
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-[#1A237E]">
                <th className="pb-4 font-medium">User ID</th>
                <th className="pb-4 font-medium">Name of user</th>
                <th className="pb-4 font-medium">User status</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Admin control</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-gray-100">
                <td className="py-4">#CCCCS45</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                  <Image
                                        src="/EllipseAvatar4.svg"
                                        alt="Account icon"
                                        width={20}
                                        height={20}
                                      />
                    Patrick James
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Professional
                  </div>
                </td>
                <td className="py-4">
                  <div className="bg-[#B80405] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 w-fit">
                  <Image
                                        src="/stop.svg"
                                        alt="Account icon"
                                        width={15}
                                        height={15}
                                      />
                    Deactivated
                  </div>
                </td>
                <td className="py-4">
                  <button className="bg-[#006A05] text-white text-xs w-[90%] px-4 py-1 rounded-sm">Activate</button>
                </td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="py-4">#CCCCS45</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                  <Image
                                        src="/EllipseAvatar4.svg"
                                        alt="Account icon"
                                        width={20}
                                        height={20}
                                      />
                    Patrick James
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Professional
                  </div>
                </td>
                <td className="py-4">
                  <div className="bg-[#006A05] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 w-fit">
                  <Image
                                        src="/activate.svg"
                                        alt="Account icon"
                                        width={15}
                                        height={15}
                                      />
                    Activated
                  </div>
                </td>
                <td className="py-4">
                  <button className="bg-[#B80405] text-white  w-[90%] text-xs px-4 py-1 rounded-md">Deactivate</button>
                </td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="py-4">#CCCCS45</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                  <Image
                                        src="/EllipseAvatar4.svg"
                                        alt="Account icon"
                                        width={20}
                                        height={20}
                                      />
                    Patrick James
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Professional
                  </div>
                </td>
                <td className="py-4">
                  <div className="bg-[#B80405] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 w-fit">
                  <Image
                                        src="/stop.svg"
                                        alt="Account icon"
                                        width={15}
                                        height={15}
                                      />
                    Deactivated
                  </div>
                </td>
                <td className="py-4">
                  <button className="bg-[#006A05] text-white text-xs w-[90%] px-4 py-1 rounded-sm">Activate</button>
                </td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="py-4">#CCCCS45</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                  <Image
                                        src="/EllipseAvatar4.svg"
                                        alt="Account icon"
                                        width={20}
                                        height={20}
                                      />
                    Patrick James
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Professional
                  </div>
                </td>
                <td className="py-4">
                  <div className="bg-[#006A05] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 w-fit">
                  <Image
                                        src="/activate.svg"
                                        alt="Account icon"
                                        width={15}
                                        height={15}
                                      />
                    Activated
                  </div>
                </td>
                <td className="py-4">
                  <button className="bg-[#006A05] text-white text-xs px-4 py-1 w-[90%] rounded-sm">Activate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
