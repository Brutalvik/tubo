import React, { useState } from "react";
import { Card, CardBody, Image, Button, Slider } from "@heroui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const CarCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="w-full flex flex-row gap-4 bg-gray-500  backdrop-blur-md border border-gray-300 shadow-lg rounded-lg">
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
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? <GoHeartFill size={25} /> : <GoHeart size={25} />}
              </Button>
            </div>

            <div className="flex justify-end mb-2">
              <p className="text-2xl">4:32</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CarCard;
