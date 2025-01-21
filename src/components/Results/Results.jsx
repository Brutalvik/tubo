import React from "react";
import CarCard from "@features/CarCard/CarCard";

const Results = ({ cars, startDate, endDate }) => {
  return (
    <>
      {cars?.map(
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
          carImageUrl,
        }) => (
          <div className="flex flex-col m-2 p-2" key={carId}>
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
              carImgURL={carImageUrl}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        )
      )}
    </>
  );
};

export default Results;
