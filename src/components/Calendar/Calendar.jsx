import { Button, DateRangePicker } from "@nextui-org/react";
import { parseZonedDateTime } from "@internationalized/date";
import { Input } from "@nextui-org/react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useRef } from "react";

const Calendar = () => {
  const inputRef = useRef();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ["places"],
    googleMapsClientId: process.env.REACT_APP_CLIENT_ID,
  });

  console.log(isLoaded);

  const handleOnPlacesChanged = () => {
    let address = inputRef.current.getPlaces();
    console.log(address);
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
            <Input key="inside" label="Where" type="text" className="w-full" />
          </StandaloneSearchBox>
        )}
      </div>

      {/* Date range picker */}
      <div className="flex w-full gap-4">
        <DateRangePicker
          hideTimeZone
          defaultValue={{
            start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
            end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
          }}
          label="Event duration"
          visibleMonths={2}
        />
        <Button className="h-[15px]" variant="solid">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
