import Inputs from "@/components/Homepage/Inputs";
import React from "react";

export default function page() {
  return (
    <div className="max-w-xl mx-auto border-l border-r min-h-screen">
      <div className="py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="uppercase text-3xl font-bold sm:text-2xl">Home</h2>
      </div>

      <Inputs />
    </div>
  );
}
