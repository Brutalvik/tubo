import { useEffect, useState, useRef } from "react";
import {
  APIProvider,
  Map,
  useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import Markers from "@components/Markers/Markers";

const MapWithMarkers = ({ cars }, startDate, endDate) => {
  return (
    <div className="h-full w-full">
      <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <Map
          center={{ lat: 43.64, lng: -79.41 }}
          zoom={12}
          mapId={process.env.REACT_APP_MAP_ID}
        >
          <Markers cars={cars} startDate={startDate} endDate={endDate} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapWithMarkers;
