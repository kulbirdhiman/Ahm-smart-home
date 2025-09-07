"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Layers,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Categories", href: "/admin/categorey", icon: Layers },
  { name: "Products", href: "/admin/product", icon: Package },
  { name: "Users", href: "/admin/user", icon: User },
];

const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-900 text-gray-100 h-screen flex flex-col border-r border-gray-800 transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1
            className={`text-lg font-bold transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Admin
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-800"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 mt-4 space-y-2">
          {menuItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition group relative"
            >
              <Icon className="h-5 w-5" />
              <span
                className={`text-sm font-medium transition-opacity ${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {name}
              </span>

              {/* Tooltip when collapsed */}
              {!isOpen && (
                <span className="absolute left-16 bg-gray-800 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {name}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 space-y-2">
          <Link
            href="/admin/profile"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition group relative"
          >
            <User className="h-5 w-5" />
            {isOpen && <span className="text-sm font-medium">Profile</span>}
            {!isOpen && (
              <span className="absolute left-16 bg-gray-800 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Profile
              </span>
            )}
          </Link>

          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-red-600 transition group relative">
            <LogOut className="h-5 w-5" />
            {isOpen && <span className="text-sm font-medium">Logout</span>}
            {!isOpen && (
              <span className="absolute left-16 bg-gray-800 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Logout
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-950 p-6 text-white">
        {/* children */}
      </main>
    </div>
  );
};

export default AdminSidebar;
