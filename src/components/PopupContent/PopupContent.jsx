import React, { useState } from "react";
import { Button } from "@heroui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Image } from "@heroui/react";

const PopupContent = ({
  car,
  isDiscountApplied,
  totalPrice,
  discountedPrice,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{ textAlign: "center", position: "relative", maxWidth: "250px" }}
      className="p-2"
    >
      {/* Like button */}
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 m-2 absolute top-0 right-0"
        radius="full"
        variant="light"
        onPress={() => setLiked((v) => !v)}
      >
        {liked ? <GoHeartFill size={25} /> : <GoHeart size={25} />}
      </Button>

      {/* Car Image */}
      <Image
        alt="Car image"
        className="object-cover rounded-lg shadow-md"
        height={150} // Fixed height for consistency
        width={250} // Fixed width for consistency
        src={car.carImgURL}
      />

      {/* Car Information */}
      <div className="mt-2">
        <h1 className="font-bold text-xl">{`${car.make} ${car.model}`}</h1>
        <p className="font-normal text-sm mt-1.5">{car.year}</p>
      </div>

      {/* Price Information */}
      <p className="mt-2">
        Price:{" "}
        {isDiscountApplied ? (
          <span className="text-green-500">
            <s className="text-black line-through">CA${totalPrice}</s> CA$
            {discountedPrice}
          </span>
        ) : (
          `CA$${totalPrice}`
        )}
      </p>
    </div>
  );
};

export default PopupContent;
