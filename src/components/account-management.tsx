import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function AccountManagement() {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold text-blue-900">Account Management</CardTitle>
        <a href="#" className="text-sm text-blue-600 flex items-center">
          View More
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600">
                <th className="pb-2 font-medium">User ID</th>
                <th className="pb-2 font-medium">Name of user</th>
                <th className="pb-2 font-medium">User status</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Admin control</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-t border-gray-100">
                  <td className="py-2">#CCCCS45</td>
                  <td className="py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-100"></div>
                      Patrick James
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 rounded-full bg-black"></div>
                      Professional
                    </div>
                  </td>
                  <td className="py-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-md">Suspended</span>
                  </td>
                  <td className="py-2">
                    <button className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-md">Activate</button>
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
