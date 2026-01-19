import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="ml-2 mr-3">
                <span className="text-xl font-bold text-gray-800">ARTIFACT</span>
                <br />
                <span className="text-sm font-semibold text-gray-600">GEEKS</span>
              </div>
            </div>
          </div>

          {/* Center: Admin Dashboard Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-lg md:text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>

          {/* Right: (optional future buttons) */}
          <div className="flex items-center space-x-4">
            {/* future: logout, profile, etc */}
          </div>

        </div>
      </div>
    </nav>
  );
}
