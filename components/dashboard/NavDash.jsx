"use client";

import Image from "next/image";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

const NavDash = ({ profileImage, email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between mt-8 max-lg:mt-0 max-md:flex-col">
      <div className="flex items-center justify-between max-xs:flex-col w-full mr-2 max-sm:mb-6">
        <h1 className="text-2xl font-bold font-montserrat leading-normal tracking-[0.05rem]">
          Dashboard
        </h1>
        <div className="flex items-center justify-between relative">
          <input
            type="text"
            className="p-2 pl-5 max-sm:pl-2 max-sm:w-28 text-sm rounded-[10px]"
            placeholder="Search.."
          />
          <Image
            src={"/icons/searchIcon.png"}
            width={23}
            height={23}
            alt="Search icon"
            className="cursor-pointer absolute right-5 p-1"
          />
        </div>
      </div>
      <div className="flex items-center justify-end max-sm:flex-col max-sm:w-full gap-7 max-sm:gap-4">
        <div className="flex items-center justify-end w-full gap-10">
          <Image
            src={"/icons/bellIcon.png"}
            width={20}
            height={20}
            alt="Bell icon"
          />
          <div className="relative">
            <button
              className="rounded-full overflow-hidden focus:outline-none"
              onClick={toggleDropdown}
            >
              <Image
                src={profileImage}
                width={50}
                height={50}
                alt="Avatar Icon"
                className="cursor-pointer"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 p-3 w-auto bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <p className="block px-4 py-2 text-gray-700">{email}</p>
                  <div className="flex items-center justify-end w-full">
                    <button
                      onClick={() => signOut("google")}
                      className="block rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-400"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDash;
