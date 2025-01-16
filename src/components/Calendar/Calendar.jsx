import { Button, DateRangePicker } from "@nextui-org/react";
import { parseZonedDateTime } from "@internationalized/date";
import { Input } from "@nextui-org/react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import { useRef } from "react";
import moment from "moment-timezone";
import { useState } from "react";

const Calendar = () => {
  const today =
    moment().tz("America/Los_Angeles").format("YYYY-MM-DDTHH:mm:ss") +
    `[America/Los_Angeles]`;
  const plusThreeDays =
    moment()
      .tz("America/Los_Angeles")
      .add(3, "days") // Adds 3 days
      .format("YYYY-MM-DDTHH:mm:ss") + `[America/Los_Angeles]`;

  const [dateRange, setDateRange] = useState({
    start: parseZonedDateTime(today),
    end: parseZonedDateTime(plusThreeDays),
  });
  const [isCalenderOpen, setIsCalendarOpen] = useState(false);

  const libraries = ["places"];
  const inputRef = useRef();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
    googleMapsClientId: process.env.REACT_APP_CLIENT_ID,
  });

  console.log(isLoaded);

  const handleOnPlacesChanged = () => {
    let address = inputRef.current.getPlaces();
    console.log(address);
  };

  const handleDateChange = (range) => {
    const formattedStart =
      moment
        .tz(range.start, "America/Los_Angeles")
        .format("YYYY-MM-DDTHH:mm:ss") + "[America/Los_Angeles]";

    const formattedEnd =
      moment
        .tz(range.end, "America/Los_Angeles")
        .format("YYYY-MM-DDTHH:mm:ss") + "[America/Los_Angeles]";

    setDateRange({
      start: parseZonedDateTime(formattedStart),
      end: parseZonedDateTime(formattedEnd),
    });

    console.log("Formatted Start Date: ", formattedStart);
    console.log("Formatted End Date: ", formattedEnd);
    setIsCalendarOpen(false);
  };

  return (
    <div className="w-[300px] max-w-xl flex flex-col gap-2 ">
      {/* Input for location */}
      <div className="w-full">
        {isLoaded && (
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handleOnPlacesChanged}
          >
            <Input
              key="inside"
              label="Where"
              type="text"
              className="w-full"
              placeholder=""
            />
          </StandaloneSearchBox>
        )}
      </div>

      {/* Date range picker */}
      <div className="flex w-full gap-4">
        <DateRangePicker
          isOpen={isCalenderOpen}
          onOpenChange={() =>
            setIsCalendarOpen((isCalenderOpen) => !isCalenderOpen)
          }
          hideTimeZone
          onChange={handleDateChange}
          defaultValue={{
            start: dateRange.start,
            end: dateRange.end,
          }}
          value={{
            start: dateRange.start,
            end: dateRange.end,
          }}
          label="Booking Dates"
          visibleMonths={2}
          minValue={parseZonedDateTime(today)}
        />
        <Button className="h-[15px]" variant="solid">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
