import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import SideNav from "@/Components/SideNav";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import StoreProvider from "@/Redux/reduxStore";
import SearchBar from "@/Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode, setIsSideNavCollapsed } from "@/Redux/globalSlice";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";

export function Authenticated({ header, children }) {
  const { user } = usePage().props.auth;

  // Redux State Objects
  const isSideNavCollapsed = useSelector(
    (state) => state.global.isSideNavCollapsed,
  );

  const isDarkMode = useSelector((state) => state.global.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Redux dispatch
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Side nav */}
      {isSideNavCollapsed && (
        <SideNav
          handleClose={() =>
            dispatch(setIsSideNavCollapsed(!isSideNavCollapsed))
          }
        />
      )}

      <main
        className={`flex flex-col w-full dark:bg-dark-bg bg-gray-50 ${!isSideNavCollapsed ? "" : "md:pl-64"}`}
      >
        <nav className="border-b border-gray-100 bg-white dark:bg-black">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-12 justify-between">
              <div className="flex items-center justify-center gap-8">
                {/* Menu icon to access side nav */}
                <MenuOutlinedIcon
                  className={`cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-gray-500 ${!isSideNavCollapsed && "hidden"} `}
                  onClick={() => {
                    dispatch(setIsSideNavCollapsed(!isSideNavCollapsed));
                  }}
                />

                {/* Search bar */}
                <SearchBar />
              </div>

              <div className="-me-2 flex items-center">
                {/* Dark mode toggle */}
                <button
                  className={`rounded p-2 ${isDarkMode ? "dark:hover:bg-gray-500" : "hover:bg-gray-200"}`}
                  onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
                >
                  {isDarkMode ? (
                    <ModeNightOutlinedIcon className="h-6 w-6 text-gray-200" />
                  ) : (
                    <WbSunnyOutlinedIcon className="h-6 w-6" />
                  )}
                </button>
                <Link
                  href={route("profile.edit")}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 dark:text-gray-300 
                  transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <SettingsOutlinedIcon />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
}

export function AuthenticatedLayout({ header, children }) {
  return (
    <StoreProvider>
      <Authenticated header={header}>{children}</Authenticated>
    </StoreProvider>
  );
}
