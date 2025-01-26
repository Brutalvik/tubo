import React, { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import Loader from "@features/Loader/Loader";

const Results = React.lazy(() => import("@components/Results/Results"));
const MapWithMarkers = React.lazy(() =>
  import("@components/MapWithMarkers/MapWithMarkers")
);

const SearchResults = () => {
  const { cars, loading } = useSelector((state) => state.cars);
  const today = new Date();
  const startDate = new Date(today.setHours(14, 0, 0, 0)); // Set today's date at 14:00
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 3); // Add 3 days to today's date
  endDate.setHours(14, 0, 0, 0); // Set the end date at 14:00

  // Render loading state while data is being fetched
  if (loading) {
    return <Loader />;
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
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default SearchResults;
