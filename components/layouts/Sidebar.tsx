"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4 p-3">
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
  );
};

export default Sidebar;
