import { AdvancedMarker } from "@vis.gl/react-google-maps";
import React from "react";
import { Chip } from "@heroui/react";
import { calculatePriceForSelectedDuration } from "@utils/priceCalculator.js";

const Markers = ({ cars }, startDate, endDate) => {
  console.log("MARKERS : ", cars);
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
          carImageUrl,
        }) => {
          // Calculate price and check if discount is applied
          const {
            totalDays,
            totalPrice,
            discountedPrice,
            discountAmount,
            isDiscountApplied,
          } = calculatePriceForSelectedDuration(
            startDate,
            endDate,
            pricePerDay,
            discount
          );

          return (
            <AdvancedMarker
              key={carId}
              position={{
                lat: location.latitude,
                lng: location.longitude,
              }}
            >
              <Chip variant="bordered" className="bg-black">
                {isDiscountApplied
                  ? `CA$${discountedPrice}`
                  : `CA$${pricePerDay}`}
              </Chip>
            </AdvancedMarker>
          );
        }
      )}
    </>
  );
};

export default Markers;
