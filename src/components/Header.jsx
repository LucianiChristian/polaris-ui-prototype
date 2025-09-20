import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Calendar,
  FileText,
  User,
  Settings,
  Home,
  Users,
  ChevronDown,
  LogOut,
  Star,
} from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navItems = [
    { path: "/", label: "Daily", icon: Home },
    { path: "/projects", label: "Projects", icon: FileText },
    { path: "/contacts", label: "Contacts", icon: Users },
    { path: "/calendar", label: "Calendar", icon: Calendar },
  ];

  const profileMenuItems = [
    { path: "/profile", label: "Profile", icon: User },
    { path: "/settings", label: "Settings", icon: Settings },
    { action: "logout", label: "Sign Out", icon: LogOut },
  ];

  const handleProfileAction = (action) => {
    if (action === "logout") {
      console.log("Logging out...");
    }
    setShowProfileDropdown(false);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            {/* Brand Logo and Name */}
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  Polaris North Star
                </h1>
                <div className="text-xs text-gray-600 font-medium -mt-1">
                  Management & Planning System
                </div>
              </div>
            </div>

            <nav className="flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Full Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search your workspace"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm border border-blue-200">
                  JD
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">
                      John Doe
                    </div>
                    <div className="text-xs text-gray-600">Project Manager</div>
                  </div>

                  {profileMenuItems.map((item) => {
                    const Icon = item.icon;

                    if (item.action) {
                      return (
                        <button
                          key={item.action}
                          onClick={() => handleProfileAction(item.action)}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {item.label}
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setShowProfileDropdown(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <div className="px-4 py-2">
                      <div className="text-xs text-gray-500">Version 2.1.0</div>
                      <div className="text-xs text-gray-500">
                        © 2025 Polaris North Star
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdown */}
      {showProfileDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </header>
  );
};

export default Header;
