"use client";
import React, { useState } from "react";
import Logo from "../common/logo";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import LinksData from "./LinksData";

// Helper function to determine if a link is active
const isActiveLink = (link, pathname) => {
  pathname.split("/")[pathname.split("/").length - 1];
  if (link.to === pathname) return true;
  console.log(link.to);
  if (link.Dropdown) {
    return link.Dropdown.menu.some((submenu) => submenu.to === pathname);
  }
  return false;
};

function Aside() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let pathname = usePathname();
  console.log(pathname.split("/")[pathname.split("/").length - 1]);

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[329px] min-h-[90vh]  m-[5vh] rounded-[45px] bg-secondary-color flex flex-col items-center shadow-custom">
      {/* Logo */}
      <div className="cursor-pointer mb-4">
        <Logo />
      </div>

      {/* Navigation Links */}
      <div className="w-full text-left">
        <div className="flex flex-col gap-y-4">
          {LinksData.map((item, index) => {
            const isActive = isActiveLink(item, pathname);

            return item.Dropdown ? (
              <React.Fragment key={index}>
                {/* Dropdown Button */}
                <button
                  className={`flex items-center w-full h-12 gap-x-2.5 px-10 rounded-r-full transition-colors font-medium ${
                    isActive
                      ? "bg-red-100 text-red-500 before:block before:absolute before:inset-0 before:w-1 before:bg-red-500 relative inline-block before:rounded-md"
                      : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <span
                    className={`${
                      isActive ? "fill-red-500" : "fill-customBlack"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <div className="flex items-center justify-between w-full">
                    {item.name}
                    <FaAngleDown
                      className={`transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Dropdown Menu */}
                <ul
                  className={`w-4/5 ml-auto overflow-hidden transition-h duration-500 ${
                    activeDropdown === index
                      ? "h-[120px] visible opacity-100"
                      : "h-0 invisible opacity-0"
                  }`}
                >
                  {item.Dropdown.menu.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={submenu.to}
                        className={`p-2 flex font-thin transition-opacity duration-300 text-customBlack gap-2 ${
                          pathname === submenu.to ? "opacity-30" : "opacity-100"
                        }`}
                      >
                        <span>{submenu.icon}</span> {submenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ) : (
              // Non-Dropdown Link
              <Link
                href={item.to}
                onClick={() => setActiveDropdown(null)} // Close any open dropdown when clicking a link
                className={`flex items-center justify-start w-full h-12 gap-x-2.5 px-10 rounded-r-full transition-colors font-medium relative ${
                  isActive
                    ? "bg-red-100 text-red-500 before:block before:absolute before:inset-0 before:w-1 before:bg-red-500 relative inline-block before:rounded-md"
                    : ""
                }`}
                key={index}
              >
                <span
                  className={`${
                    isActive
                      ? "bg-red-100 text-red-500 stroke-red-500"
                      : "stroke-customBlack"
                  }`}
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Aside;
