import React, { useRef, useState, useMemo } from "react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import { Button, Input } from "@heroui/react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { setSearchCriteria } from "@store/reducers/searchCriteria";
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
    <div className="w-full sm:w-[500px] mx-auto p-4">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white/20 backdrop-blur-sm border border-300 rounded-lg p-2 flex flex-col gap-4 shadow-lg"
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
                className="w-full text-lg" // Adjust the width and height here
                placeholder="Enter a location"
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
        <div className="w-full flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col justify-around sm:flex-row sm:gap-2 w-full">
            <Input
              label="From"
              labelPlacement="inside"
              type="datetime-local"
              value={moment(formik.values.startDate).format("YYYY-MM-DDTHH:mm")}
              onChange={(date) => formik.setFieldValue("startDate", date)}
              className="rounded-lg w-full sm:w-auto text-lg sm:text-base" // Adjust input width here
              min={moment().format("YYYY-MM-DDTHH:mm")}
            />
            <Input
              label="To"
              labelPlacement="inside"
              type="datetime-local"
              value={moment(formik.values.endDate).format("YYYY-MM-DDTHH:mm")}
              onChange={(date) => formik.setFieldValue("endDate", date)}
              className="rounded-lg w-full sm:w-auto text-lg sm:text-base mt-2 sm:mt-0" // Adjust input width here
              max={moment().add(1, "year").format("YYYY-MM-DDTHH:mm")}
            />
          </div>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full h-12 text-lg sm:text-base" // Adjust button width and height here
          variant="solid"
        >
          Search
        </Button>
      </form>
    </div>
  );
};
export default Calendar;
