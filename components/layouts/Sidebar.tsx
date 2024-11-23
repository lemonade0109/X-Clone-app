"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import type { AdapterUser } from "next-auth/adapters";
import { HiDotsHorizontal } from "react-icons/hi";

const Sidebar = () => {
  const { data: session } = useSession();
  const user = session?.user as AdapterUser & { username: string; uid: string };

  return (
    <div className="flex flex-col justify-between h-screen p-3">
      <div className="flex flex-col gap-4">
        <Link href="/">
          <FaXTwitter className="icon-size" />
        </Link>
        <Link
          href="/"
          className="flex items-center p-3 rounded-full w-fit transition-all duration-200 gap-2 hover:bg-gray-100"
        >
          <FaHome className="w-7 h-7" />
          <span className="font-bold hidden xl:inline">Home</span>
        </Link>
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-blue-400 hover:bg-blue-600 text-white  w-48 h-9 mt-4 rounded-full transition-all duration-200 hover:brightness-95 shadow-md hidden xl:inline"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-400 hover:bg-blue-600 text-white  w-48 h-9 mt-4 rounded-full transition-all duration-200 hover:brightness-95 shadow-md hidden xl:inline"
          >
            Sign In
          </button>
        )}
      </div>

      {session && (
        <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <img
            src={user.image!}
            alt="user-img"
            className="h-10 w-10 rounded-full xl:mr-2"
          />
          <div className="hidden xl:inline">
            <h4 className="font-bold">{user.name}</h4>
            <p className="text-gray-500">{user.username}</p>
          </div>
          <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
