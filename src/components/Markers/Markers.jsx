import { AdvancedMarker } from "@vis.gl/react-google-maps";
import React from "react";
import { Chip } from "@heroui/react";
import { calculatePriceForSelectedDuration } from "@utils/priceCalculator.js";

const Markers = ({ cars }, startDate, endDate) => {
  const handleMarkerClick = (carId) => {
    console.log(`Marker clicked for car: ${carId}`);
    // Add any action you'd like to trigger on click
  };

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
              onClick={() => handleMarkerClick(carId)}
              style={{ cursor: "pointer" }} // This will change the cursor on hover
            >
              <Chip
                variant="bordered"
                className="bg-black cursor-pointer hover:bg-gray-700"
              >
                {isDiscountApplied ? (
                  <p className="text-green-500">{`CA$${discountedPrice}`}</p>
                ) : (
                  <p>{`CA$${pricePerDay}`}</p>
                )}
              </Chip>
            </AdvancedMarker>
          );
        }
      )}
    </>
  );
};

export default Markers;
