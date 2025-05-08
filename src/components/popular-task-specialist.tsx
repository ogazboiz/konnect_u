import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PopularTaskSpecialist() {
  return (
    <Card className="bg-white rounded-lg shadow-sm border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-blue-900">Popular Task Specialist</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Image
                src="/EllipseAvatar1.svg"
                alt="Avatar 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/EllipseAvatar2.png"
                alt="Avatar 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/EllipseAvatar3.svg"
                alt="Avatar 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-blue-900">+100</div>
              <div className="flex text-[#FFA000] gap-0">☆☆☆☆☆</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-900">Task Completion in Due Date</div>
            <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
            </div>
            <div className="text-xs text-blue-900 mt-1">80% completed task</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}