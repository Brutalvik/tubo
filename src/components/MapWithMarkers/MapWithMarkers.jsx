import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { calculatePriceForSelectedDuration } from "@utils/priceCalculator";

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapWithMarkers = ({ cars, startDate, endDate }) => {
  // Custom chip-like marker style
  const createChipIcon = (price, isDiscountApplied) => {
    const textColor = isDiscountApplied ? "lightGreen" : "white";

    return L.divIcon({
      className: "custom-chip-marker",
      html: `<div style="
         background-color: rgba(0, 0, 0, 0.60); /* Semi-transparent white for glass effect */
  color: ${textColor};
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap; /* Ensure no line breaks */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  backdrop-filter: blur(4px); /* Glass blur effect */
  -webkit-backdrop-filter: blur(4px); /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.4); /* Transparent border for glass look */
  width: 70px;
      ">
        CA$${price}
      </div>`,
    });
  };

  return (
    <div className="h-full w-full overflow-auto">
      <MapContainer
        center={[cars[0].location.latitude, cars[0].location.longitude]}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cars.map((car) => {
          const { totalPrice, discountedPrice, isDiscountApplied } =
            calculatePriceForSelectedDuration(
              startDate,
              endDate,
              car.pricePerDay,
              car.discount
            );

          return (
            <Marker
              key={car.carId}
              position={[car.location.latitude, car.location.longitude]}
              icon={createChipIcon(
                isDiscountApplied ? discountedPrice : totalPrice,
                isDiscountApplied
              )}
            >
              {/* Tooltip for hover interaction */}
              <Tooltip direction="top" offset={[0, -20]} opacity={1}>
                <div style={{ textAlign: "center" }}>
                  <h3>{`${car.make} ${car.model}`}</h3>
                  <p>Year: {car.year}</p>
                  <p>
                    Price:{" "}
                    {isDiscountApplied ? (
                      <span className="text-green-500">
                        <s className="text-black line-through">
                          CA${totalPrice}
                        </s>{" "}
                        CA${discountedPrice}
                      </span>
                    ) : (
                      `CA$${totalPrice}`
                    )}
                  </p>
                </div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapWithMarkers;
