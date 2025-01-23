import React, { useState } from "react";
import { Button } from "@heroui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Image } from "@heroui/react";
import SaveChip from "@features/SaveChip/SaveChip";
import { FaStar, FaCrown } from "react-icons/fa";

const PopupContent = ({
  car,
  isDiscountApplied,
  totalPrice,
  discountedPrice,
  discountAmount,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "auto",
        cursor: "pointer",
        borderRadius: "20px",
      }}
    >
      {/* Like button */}
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 m-1 absolute top-0 right-0"
        radius="full"
        variant="light"
        onPress={() => setLiked((v) => !v)}
        style={{
          zIndex: 20, // Increased zIndex to ensure it's on top
          pointerEvents: "all", // Ensure button is clickable
        }}
      >
        {liked ? (
          <GoHeartFill size={25} color="red" />
        ) : (
          <GoHeart size={25} color="gray" />
        )}
      </Button>

      {/* Car Image */}
      <Image
        alt="Car image"
        className="object-cover rounded-lg shadow-md"
        height={150} // Fixed height for consistency
        width={398} // Fixed width for consistency
        src={car.carImageUrl}
      />

      {/* Car Information */}
      <div className="flex flex-row gap-2">
        <h1 className="font-bold text-xl mt-2 py-3.5 text-black">{`${car.make} ${car.model}`}</h1>
        <p className="font-normal text-lg">{car.year}</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-row gap-2 border">
        <p className="text-md -text-black">{car.rating}</p>
        <FaStar className="mt-4" size={15} />
        <p className="text-md text-black">[{car.totalTrips} Trips]</p>
        {car.allStarHost && (
          <>
            <FaCrown className="mt-4" size={15} />
            <p className="text-md text-black">All Star Host</p>
          </>
        )}
      </div>

      {/* Features Section */}
      {car.features?.length > 0 && (
        <p className="text-md text-black text-left">
          <span className="font-bold">Features:</span>{" "}
          {car.features
            .map(
              (feature) => feature.charAt(0).toUpperCase() + feature.slice(1)
            )
            .join(", ")}
        </p>
      )}

      {/* Price Information */}
      <div className="relative mt-2 md:mt-[8px] flex items-center justify-between">
        {/* SaveChip aligned to the left */}
        {isDiscountApplied && (
          <div>
            <SaveChip
              amount={discountAmount}
              style={{ backgroundColor: "#d4edda" }}
            />
          </div>
        )}

        {/* Price aligned to the right */}
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm font-bold">Total:</p>
          {isDiscountApplied ? (
            <span className="text-green-600 text-sm font-bold">
              <s className="text-black line-through">CA${totalPrice}</s> CA$
              {discountedPrice}
            </span>
          ) : (
            <p className="text-sm font-bold">CA${totalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
