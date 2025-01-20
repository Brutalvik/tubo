import React, { useState, useEffect } from "react";
import { Card, CardBody, Image, Button } from "@heroui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar, FaCrown } from "react-icons/fa";
import SaveChip from "@features/SaveChip/SaveChip";
import { calculatePriceForSelectedDuration } from "@utils/priceCalculator.js";
import { fetchGeoLocation } from "@store/thunks/location";
import { useDispatch, useSelector } from "react-redux";

const CarCard = ({
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
}) => {
  const dispatch = useDispatch();
  const [locationName, setLocationName] = useState("");
  const [liked, setLiked] = useState(false);
  const carHeader = `${make} ${model} ${year}`;
  const startDate = new Date("2024-10-04T14:00:00");
  const endDate = new Date("2024-10-06T14:00:00");
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

  useEffect(() => {
    // Fetch location name for this specific card
    const fetchLocation = async () => {
      const { latitude, longitude } = location;
      const result = await dispatch(fetchGeoLocation({ latitude, longitude }));
      if (result.payload) {
        setLocationName(result.payload); // Update location name for this card
      }
    };

    fetchLocation();
  }, [location, dispatch]);

  return (
    <Card
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[640px] cursor-pointer"
      shadow="sm"
    >
      <CardBody>
        <div className="relative w-full flex flex-row gap-4 border border-gray-500 shadow-lg rounded-lg hover:bg-cardHover">
          {/* Image Section*/}
          <div className="relative ">
            <Image
              alt="Car image"
              className="object-cover rounded-lg shadow-md w-[300px]"
              height={200}
              src="https://vanguardluxuryrentals.com/wp-content/uploads/2022/06/DSC3954-1.jpg"
              width="100%"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-2xl mt-2">{carHeader}</h3>
                <div className="flex flex-row gap-2 mt-2">
                  <p className="text-small text-foreground/80">{rating}</p>
                  <FaStar />
                  <p className="text-small text-foreground/80">
                    [{totalTrips} Trips]
                  </p>
                  {allStarHost && (
                    <>
                      <FaCrown />
                      <p className="text-small text-foreground/80">
                        All Star Host
                      </p>
                    </>
                  )}
                </div>

                <h1 className="text-large font-medium mt-2">
                  <p className="text-small text-foreground/80">
                    Location : {locationName}
                  </p>
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

            {/* Bottom Elements with absolute positioning */}
            <div className="relative mt-2">
              {/* SaveChip aligned to the left at the bottom */}
              {isDiscountApplied && (
                <div className="absolute bottom-0 left-4 py-1">
                  <SaveChip amount={discountAmount} />
                </div>
              )}

              {/* Price info aligned to the right at the bottom */}
              <div className="absolute bottom-0 right-4 flex gap-2 text-xl items-center py-2">
                {isDiscountApplied && (
                  <p className="text-black-500 line-through">${totalPrice}</p>
                )}
                {isDiscountApplied ? (
                  <p className="text-green-400 font-bold">${discountedPrice}</p>
                ) : (
                  <p className="text-gray-200 font-bold">${discountedPrice}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CarCard;
