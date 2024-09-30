"use client";
import React, { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@inertiajs/react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Construction, Home, Lock } from "@mui/icons-material";
import { Divider } from "@mui/material";
import AccordionUsage from "./Accordion";
import {
  BriefcaseBusiness,
  Cctv,
  LucideHome,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";

const SideNav = ({ handleClose }) => {
  // const [showProjects, setShowProjects] = useState(false);
  // const [showPriority, setShowPriority] = useState(false);

  const isSideNavCollapsed = useSelector((state) => {
    state.global.isSideNavCollapsed;
  });

  const sideBarClasses = `fixed flex justify-between flex-col h-[100%] shadow-xl z-40
   transition-all duration-500 dark:bg-black overflow-y-auto bg-white ${isSideNavCollapsed ? "w-0 hidden" : "w-64"}
  `;

  return (
    <div className={sideBarClasses}>
      <div className="flex flex-col h-full w-full justify-start">
        {/* Top section */}
        <div className="z-50 flex items-center justify-between min-h-[56px] w-full px-6 pt-3">
          <h1 className="font-bold underline italic tracking-wide text-gray-900 dark:text-gray-300">
            CuriousFellow {/* Create of App Company name  */}
          </h1>
          <CloseOutlinedIcon
            onClick={handleClose}
            className="cursor-pointer dark:text-gray-200"
          />
        </div>

        <Divider style={{ padding: "0.5rem" }} />

        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          {/* Each Companies Logo goes here */}
          <div className="bg-gray-200 dark:bg-gray-500 py-2 px-3 rounded-lg shadow-inner">
            <ApplicationLogo className="h-12 text-gray-900 dark:text-gray-300" />
          </div>

          <div className="ml-3">
            <h3 className="text-md font-bold tracking-wide dark:text-gray-300">
              TopCoder.inc {/* Company Name goes here */}
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <Lock
                className="mt-[0.1rem] text-sm text-gray-500 dark:text-gray-400"
                fontSize="x-small"
              />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>

        {/* SideNav links */}
        <nav className="z-10 w-full">
          {SideNavLinksList.map(({ href, icon, label }) => (
            <SideBarLinks
              key={label}
              className="py-2"
              href={href}
              icon={icon}
              label={label}
            />
          ))}
        </nav>

        <Divider
          style={{ padding: "0.5rem" }}
          className="dark:border-gray-700"
        />

        {/* Projects & Priority */}
        <div className="flex flex-col items-start mt-2">
          <AccordionUsage
            name="Projects"
            icon={<Construction className={`mr-3`} />}
          />

          <AccordionUsage
            name="Priority Levels"
            icon={<Cctv className={`mr-3`} />}
          />
        </div>
      </div>
    </div>
  );
};

export const SideBarLinks = ({ href, icon, label, className }) => {
  const isActive = route().current === href;
  const isDarkMode = useSelector((state) => state.global.isDarkMode);

  return (
    <Link href={href} className="w-full">
      <div
        className={
          className +
          ` relative flex cursor-pointer items-center justify-start px-8 gap-3 transition-colors hover:bg-gray-100 hover:rounded-md dark:bg-black dark:hover:bg-gray-700
          ${isActive ? "bg-gray-200 text-white dark:bg-gray-600" : ""}
        `
        }
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[5px] bg-green-600" />
        )}

        <div
          className={`rounded-xl shadow-2xl py-1 px-2 ${isDarkMode ? "dark:bg-gray-800" : "bg-gray-200"}`}
        >
          {icon}
        </div>

        <span className={`font-medium text-gray-800 dark:text-gray-200`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

const SideNavLinksList = [
  {
    href: "/",
    icon: <LucideHome className="text-gray-800 dark:text-gray-200 h-5 w-5" />,
    label: "Home",
  },
  {
    href: "/timeline",
    icon: (
      <BriefcaseBusiness className="text-gray-800 dark:text-gray-200 h-5 w-5" />
    ),
    label: "Timeline",
  },
  {
    href: "/users",
    icon: <User className="text-gray-800 dark:text-gray-200 h-5 w-5" />,
    label: "Users",
  },
  {
    href: "/teams",
    icon: <Users className="text-gray-800 dark:text-gray-200 h-5 w-5" />,
    label: "Teams",
  },
  {
    href: "/search",
    icon: <Search className="text-gray-800 dark:text-gray-200 h-5 w-5" />,
    label: "Search",
  },
  {
    href: "/",
    icon: <Settings className="text-gray-800 dark:text-gray-200 h-5 w-5" />,
    label: "Settings",
  },
];
export default SideNav;
