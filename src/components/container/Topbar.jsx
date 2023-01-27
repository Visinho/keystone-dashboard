import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import profilePicture from "@/assets/images/pexels-rodnae-productions-6784861.jpg";

const Topbar = () => {
  return (
    <div className="top-0 w-full">
      <div className="hidden lg:flex items-center justify-between">
        <div className="relative bg-slate-200 w-1/3 rounded-md flex items-center p-2">
          <input
            type="search"
            className="p rounded-md bg-transparent w-full outline-none"
            placeholder="Search..."
          />
          <UilSearch className="top-2 right-2 text-slate-400 cursor-pointer" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <ul className="flex flex-col items-end">
            <li className="text-slate-600">jamesbrown@example.com</li>
            <li className="text-slate-500 text-sm font-light">Admin</li>
          </ul>

          {/* Profile */}
          <div className="flex items-center justify-center h-12 w-12 rounded-full">
            <img
              src={profilePicture}
              alt="James Brown"
              className="rounded-full h-10 w-10"
            />
          </div>
        </div>
      </div>
      {/* Mobile */}
    </div>
  );
};

export default Topbar;
