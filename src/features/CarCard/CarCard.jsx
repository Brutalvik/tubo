import React, { useState } from "react";
import { Card, CardBody, Image, Button } from "@heroui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar, FaCrown } from "react-icons/fa";
import SaveChip from "@features/SaveChip/SaveChip";

const CarCard = ({
  carId,
  make,
  model,
  year,
  rating,
  allStarHost,
  pricePerDay,
  discount,
  location,
  totalTrips,
}) => {
  const [liked, setLiked] = useState(false);
  const carHeader = `${make} ${model} ${year}`;

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[640px] cursor-pointer "
      shadow="sm"
    >
      <CardBody>
        <div className="w-full flex flex-row gap-4 bg-cardBackground  backdrop-blur-md border border-gray-500 shadow-lg rounded-lg  hover:bg-cardHover">
          {/* Image Section */}
          <div className="relative">
            <Image
              alt="Car image"
              className="object-cover rounded-lg shadow-md"
              height={200}
              src="https://vanguardluxuryrentals.com/wp-content/uploads/2022/06/DSC3954-1.jpg"
              width="100%"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-2xl mt-2">{carHeader}</h3>
                <div className="flex flex-row gap-2 mt-2">
                  <p className="text-small text-foreground/80">{rating}</p>
                  <FaStar />
                  <p className="text-small text-foreground/80">
                    [{totalTrips} Trips]
                  </p>
                  <FaCrown />
                  <p className="text-small text-foreground/80">
                    {allStarHost && "All Star Host"}
                  </p>
                </div>

                <h1 className="text-large font-medium mt-2">
                  <p className="text-small text-foreground/80">{location}</p>
                </h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 m-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? <GoHeartFill size={25} /> : <GoHeart size={25} />}
              </Button>
            </div>
            <div className="flex justify-between">
              <SaveChip amount={5} />
              <div className="flex justify-end text-xl gap-2">
                <p className="!text-black-500 !line-through">{pricePerDay}</p>
                <p className="text-green-400 font-bold">$45</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CarCard;
