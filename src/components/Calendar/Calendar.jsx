import React, { useRef, useState, useMemo } from "react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import { Button, Input } from "@heroui/react";
import { useFormik } from "formik";
import DateRangePickerWithTime from "@features/DateRangePickerWithTime/DateRangePickerWithTime";
import { useSelector, useDispatch } from "react-redux";
import { setSearchCriteria } from "@store/searchCriteria";
import moment from "moment";

const Calendar = () => {
  const dispatch = useDispatch();
  const { searchAddress, startDate, endDate } = useSelector(
    ({ searchCriteria }) => searchCriteria
  );

  const libraries = useMemo(() => ["places"], []);
  const inputRef = useRef();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
    googleMapsClientId: process.env.REACT_APP_CLIENT_ID,
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      location: searchAddress,
      address: searchAddress,
      startDate: moment().set({
        hour: 10,
        minute: 0,
        second: 0,
        millisecond: 0,
      }), // Set to current date with 10:00 AM
      endDate: moment()
        .add(3, "days")
        .set({ hour: 10, minute: 0, second: 0, millisecond: 0 }), //plus 3 days
    },

    onSubmit: (values) => {
      console.log("values : ", values.address);
      const location = values.address[0]?.geometry?.location;
      const lat = location ? location.lat() : null; // Extract latitude
      const lng = location ? location.lng() : null; // Extract longitude

      const viewport = values.address[0]?.geometry?.viewport;
      const viewportNE = viewport
        ? { lat: viewport.hi, lng: viewport.lo }
        : null; // Northeast corner
      const viewportSW = viewport
        ? { lat: viewport.lo, lng: viewport.hi }
        : null; // Southwest corner
      // Log the form data
      dispatch(
        setSearchCriteria({
          ...formik.values,
          address: values.address[0],
          location: values.address[0]?.name || "",
          coordinates: { lat, lng }, // Only store serializable data
          viewport: { viewportNE, viewportSW },
        })
      ); // Update search state with form values
    },
  });

  const handleOnPlacesChanged = () => {
    const address = inputRef.current.getPlaces();

    // Extract address components
    const addressComponents = address[0]?.address_components || "";
    const longName = addressComponents[0].long_name || "";
    const shortName = addressComponents[1].short_name || "";

    const countryShortName = addressComponents[2].short_name || "";

    // Combine the extracted data to show in the search bar (e.g., "Hyderabad, Telangana, IN")
    const formattedLocation = `${longName}, ${shortName}, ${countryShortName}`;

    // Log the formatted address for debugging
    console.log("Formatted Location:", formattedLocation);

    // Set the values in Formik
    formik.setFieldValue("location", formattedLocation);
    formik.setFieldValue("address", address);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[300px] max-w-xl flex flex-col gap-2 p-4"
    >
      {/* Input for location */}
      <div className="w-full">
        {isLoaded && (
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handleOnPlacesChanged}
          >
            <Input
              isClearable
              label="Where"
              type="text"
              className="w-full h-12"
              placeholder=""
              value={formik.values.location}
              onChange={formik.handleChange}
              name="location"
              onClear={() => {
                formik.setFieldValue("address", "");
                formik.setFieldValue("location", "");
              }}
            />
          </StandaloneSearchBox>
        )}
      </div>

      {/* Date range picker */}
      <div className="flex w-full gap-4">
        <DateRangePickerWithTime
          startDate={formik.values.startDate}
          endDate={formik.values.endDate}
          onStartDateChange={(date) => formik.setFieldValue("startDate", date)}
          onEndDateChange={(date) => formik.setFieldValue("endDate", date)}
        />
        <Button type="submit" className="h-[15px]" variant="solid">
          Search
        </Button>
      </div>
    </form>
  );
};

export default Calendar;
