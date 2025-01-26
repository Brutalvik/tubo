import React from "react";
import Results from "@components/Results/Results";
import MapWithMarkers from "@components/MapWithMarkers/MapWithMarkers";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

const SearchResults = () => {
  const { cars, loading } = useSelector((state) => state.cars);
  const state = useSelector(({ cars }) => cars);
  console.log("STATE : ", state);
  // Render loading state while data is being fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <h2 className="text-lg font-semibold">Loading cars, please wait...</h2>
      </div>
    );
  }

  // Render no cars found if the data fetch completes but no cars are available
  if (!loading && isEmpty(cars)) {
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <h1 className="text-lg font-semibold">No cars found</h1>
      </div>
    );
  }

  // Render results and map when cars are available
  return (
    <div className="flex flex-col md:flex-row md:h-[90vh]">
      {/* Left Section: Results */}
      <div className="flex-1 overflow-y-auto">
        <Results cars={cars} />
      </div>

      {/* Right Section: Map - visible only on medium and larger screens */}
      <div className="hidden lg:block lg:w-1/2 h-full p-2 z-10">
        <MapWithMarkers cars={cars} />
      </div>
    </div>
  );
};

export default SearchResults;
