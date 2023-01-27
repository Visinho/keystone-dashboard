import React from "react";
import {
  UilStore,
  UilShoppingCart,
  UilWallet,
  UilCreateDashboard,
  UilUsersAlt,
  UilSignalAlt3,
  UilBag,
  UilSetting,
  UilAngleDown,
} from "@iconscout/react-unicons";

// Sidebar Navigation Data
const sidebarNavLinks = [
  { id: 1, title: "Dashboard", link: "/admin", icon: UilCreateDashboard },
  { id: 2, title: "Products", link: "/admin/projects", icon: UilStore },
  { id: 3, title: "Blog", link: "/admin/analytics", icon: UilShoppingCart },
  { id: 4, title: "Transactions", link: "/admin/settings", icon: UilWallet },
  { id: 5, title: "Users", link: "/admin/settings", icon: UilUsersAlt },
  { id: 6, title: "Analysis", link: "/admin/settings", icon: UilSignalAlt3 },
  {
    id: 7,
    title: "Reports",
    link: "/admin/settings",
    icon: UilSetting,
    altIcon: UilAngleDown,
  },
  { id: 8, title: "Investment", link: "/admin/settings", icon: UilBag },
  { id: 9, title: "Settings", link: "/admin/settings", icon: UilSetting },
];

const Sidebar = () => {
  return (
    <aside className="min-w-[250px] max-w-[250px] bg-white min-h-[100vh] py-4 px-4 space-y-8">
      <div className="flex justify-center">
        <h2 className="text-5xl text-blue-900 font-black font-fira uppercase">
          Retro
        </h2>
      </div>
      <div className="px-4">
        {/* Sidebar Navigation */}
        <ul className="flex flex-col items-center justify-start space-y-2">
          {sidebarNavLinks.map((link, index) => (
            <li
              key={index + 1}
              className="flex items-center gap-4 hover:bg-indigo-50 w-full p-2 rounded-md rounded-tl-none text-sm cursor-pointer text-slate-700 hover:text-blue-800 relative"
            >
              <link.icon className="h-5 w-5" />
              {link.title}
              {link.altIcon && (
                <link.altIcon className="h-5 w-5 absolute right-2" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
