import React from "react";
import { Input } from "@heroui/react";

const SearchLocation = () => {
  return (
    <div className="flex items-center gap-4 mt-6">
      {/* Editable Input Box */}
      <p>Where</p>
      <Input
        type="text"
        placeholder="Search location"
        className="border border-gray-300 rounded-md px-4 py-2"
      />

      {/* Date/Time Range */}
      <Input type="datetime-local" className=" rounded-md px-4 py-2" />
      <Input type="datetime-local" className="rounded-md px-4 py-2" />
    </div>
  );
};

export default SearchLocation;
