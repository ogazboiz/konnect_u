"use client"
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Settings } from "lucide-react";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-700 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full min-w-56 bg-gray-50 border-r my-2 ml-2 rounded-lg border-green-700 flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        <div className="p-4 mb-4">
          <Image
            src="/KONNECTU.svg"
            alt="KonnectU Logo"
            width={120}
            height={80}
            className="mx-auto"
          />
        </div>

        <nav className="flex-1 px-2 space-y-2">
          <SidebarItem icon={<LayoutGrid size={20} />} label="Dashboard" active />
          <SidebarItem
            icon={
              <Image src="/analytic.svg" alt="Analytic icon" width={20} height={20} />
            }
            label="Analytic & Report"
          />
          <div className="space-y-2">
            <SidebarItem
              icon={
                <Image src="/account.svg" alt="Account icon" width={20} height={20} />
              }
              label="Account manage..."
            />
            <div className="ml-3 space-y-1.5">
              <SubMenuItem label="Clients" />
              <SubMenuItem label="Artisans" />
              <SubMenuItem label="Professionals" />
            </div>
          </div>
          <SidebarItem
            icon={<Image src="/message.svg" alt="Message icon" width={20} height={20} />}
            label="Message"
          />
          <SidebarItem
            icon={<LayoutGrid size={20} className="text-[#006A05]" />}
            label="Job oversight"
          />
        </nav>

        <div className="px-2 pb-6 space-y-2 mt-auto">
          <SidebarItem
            icon={<Settings size={20} className="text-[#006A05]" />}
            label="Settings"
          />
          <SidebarItem
            icon={<LayoutGrid size={20} className="text-[#006A05]" />}
            label="Logout"
          />
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 pl-3 py-2 rounded-sm ${
        active
          ? "bg-[#006A05] text-white"
          : "text-[#006A05] border border-[#006A05] hover:bg-[#006A05]/60"
      }`}
    >
      <div className="w-6 flex items-center justify-center">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

interface SubMenuItemProps {
  label: string;
}

function SubMenuItem({ label }: SubMenuItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#006A05]/60">
      <div className="ml-3 w-5 h-5 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full border-2 border-[#006A05]/60"></div>
      </div>
      <span>{label}</span>
    </div>
  );
}