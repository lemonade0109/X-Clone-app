"use client";

import { AdapterUser } from "next-auth/adapters";
import { useSession } from "next-auth/react";
import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

const Inputs = () => {
  const { data: session } = useSession();
  if (!session) return null;

  const user = session.user as AdapterUser;

  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
      <img
        src={user.image!}
        alt="user-img"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <textarea
          placeholder="What's happening?"
          className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700"
          rows={2}
        ></textarea>

        <div className="flex items-center justify-between p-2.5">
          <HiOutlinePhotograph className="h-10 w-10 p-2 text-sky-500 hover:text-sky-100 rounded-full cursor-pointer" />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
