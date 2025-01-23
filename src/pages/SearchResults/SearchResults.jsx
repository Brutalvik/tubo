import React from "react";
import Results from "@components/Results/Results";
import MapWithMarkers from "@components/MapWithMarkers/MapWithMarkers";
import cars from "../../dummy/cars";

const SearchResults = () => {
  const startDate = new Date("2024-10-04T14:00:00");
  const endDate = new Date("2024-10-06T14:00:00");

  return (
    <div className="flex flex-col md:flex-row md:h-[90vh]">
      {/* Left Section: Results */}
      <div className="flex-1 overflow-y-auto">
        <Results cars={cars} startDate={startDate} endDate={endDate} />
      </div>

      {/* Right Section: Map - visible only on medium and larger screens */}
      <div className="hidden lg:block lg:w-1/2 h-full p-2 z-10">
        <MapWithMarkers cars={cars} startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
};

export default SearchResults;
