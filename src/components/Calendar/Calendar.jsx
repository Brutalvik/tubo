import { Button, DateRangePicker, Input } from "@nextui-org/react";
import { parseZonedDateTime } from "@internationalized/date";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import { useRef, useState, useMemo } from "react";
import moment from "moment-timezone";

const Calendar = () => {
  const today =
    moment().tz("America/Los_Angeles").format("YYYY-MM-DDTHH:mm:ss") +
    `[America/Los_Angeles]`;
  const plusThreeDays =
    moment()
      .tz("America/Los_Angeles")
      .add(3, "days") // Adds 3 days
      .format("YYYY-MM-DDTHH:mm:ss") + `[America/Los_Angeles]`;

  const [isCalenderOpen, setIsCalendarOpen] = useState(false);
  const [search, setSearch] = useState({
    address: "",
    location: "",
    dates: {
      start: parseZonedDateTime(today),
      end: parseZonedDateTime(plusThreeDays),
    },
  });

  const libraries = useMemo(() => ["places"], []);
  const inputRef = useRef();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
    googleMapsClientId: process.env.REACT_APP_CLIENT_ID,
  });

  const handleOnPlacesChanged = () => {
    const address = inputRef.current.getPlaces();
    setSearch({
      ...search,
      location: address[0]?.name || "",
      address: address,
    });
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

    setSearch({
      ...search,
      dates: {
        start: parseZonedDateTime(formattedStart),
        end: parseZonedDateTime(formattedEnd),
      },
    });

    setIsCalendarOpen(false);
  };

  const handleSearch = () => {
    console.log(search);
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
              isClearable
              key="inside"
              label="Where"
              type="text"
              className="w-full"
              placeholder=""
              value={search.location}
              onChange={(e) =>
                setSearch({ ...search, location: e.target.value })
              }
              onClear={() => {
                setSearch({ ...search, address: "", location: "" });
              }}
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
            start: search.dates.start,
            end: search.dates.end,
          }}
          value={{
            start: search.dates.start,
            end: search.dates.end,
          }}
          label="Booking Dates"
          visibleMonths={2}
          minValue={parseZonedDateTime(today)}
        />
        <Button className="h-[15px]" variant="solid" onPress={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
