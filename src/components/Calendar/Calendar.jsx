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
  const { searchAddress } = useSelector(({ searchCriteria }) => searchCriteria);

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
      coordinates: { lat: null, lng: null },
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
      console.log("values : ", values);

      // Serialize the coordinates to plain lat/lng object
      const serializedCoordinates = {
        lat: values.coordinates?.lat,
        lng: values.coordinates?.lng,
      };

      dispatch(
        setSearchCriteria({
          ...values,
          address: values.address[0],
          location: values.address[0]?.name || "",
          coordinates: serializedCoordinates, // Only pass lat and lng
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

    // Combine the extracted data to show in the search bar
    const formattedLocation = `${longName}, ${shortName}, ${countryShortName}`;
    const location = address[0]?.geometry?.location;

    const lat = location ? location.lat() : null; // Extract latitude
    const lng = location ? location.lng() : null; // Extract longitude

    const serializedCoordinates = { lat, lng }; // Only store lat and lng as plain objects

    console.log("SER : ", serializedCoordinates);

    // Set the values in Formik
    formik.setFieldValue("location", formattedLocation);
    formik.setFieldValue("address", address);
    formik.setFieldValue("coordinates", serializedCoordinates);
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
              value={formik.values.location || ""}
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
