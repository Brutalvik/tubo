import React from "react";
import CarCard from "@features/CarCard/CarCard";
import cars from "../../dummy/cars";

const Results = () => {
  return (
    <>
      {cars.map(
        ({
          carId,
          hostId,
          make,
          model,
          year,
          rating,
          allStarHost,
          location,
          totalTrips,
          discount,
          pricePerDay,
          features,
        }) => (
          <div className="flex flex-col m-2 py-2">
            <CarCard
              carId={carId}
              hostId={hostId}
              make={make}
              model={model}
              year={year}
              rating={rating}
              allStarHost={allStarHost}
              location={location}
              totalTrips={totalTrips}
              discount={discount}
              pricePerDay={pricePerDay}
              features={features}
              key={carId}
            />
          </div>
        )
      )}
    </>
  );
};

export default Results;
