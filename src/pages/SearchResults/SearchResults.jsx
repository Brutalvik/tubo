import React from "react";
import Results from "@components/Results/Results";
import MapWithMarkers from "@components/MapWithMarkers/MapWithMarkers";

const SearchResults = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-[90vh]">
      {/* Left Section: Results */}
      <div className="flex-1 overflow-y-auto">
        <Results />
      </div>

      {/* Right Section: Map - visible only on medium and larger screens */}
      <div className="hidden lg:block lg:w-1/3 h-full p-2">
        <MapWithMarkers />
      </div>
    </div>
  );
};

export default SearchResults;
