import { FaChevronDown } from "react-icons/fa";
import { Button } from "@heroui/react";

export const SearchFilters = () => {
  return (
    <div className="flex items-center gap-4 mt-6">
      {/* Filter Buttons */}
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Filter
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Daily Price <FaChevronDown />
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Vehicle Type
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Make
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Years
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Seats
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        Electric
      </Button>
      <Button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
        All Pickup Options
      </Button>
    </div>
  );
};
