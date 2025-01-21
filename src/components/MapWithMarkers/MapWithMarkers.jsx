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
    <div className="h-full w-full overflow-auto">
      <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <Map
          center={{
            lat: cars[0].location.latitude,
            lng: cars[0].location.longitude,
          }}
          zoom={13}
          mapId={process.env.REACT_APP_MAP_ID}
          options={{
            zoomControl: true, // Enables zoom control
            scrollwheel: true, // Allows zooming with scroll wheel
            draggable: true, // Allows panning the map
            disableDoubleClickZoom: false, // Allow zoom with double-click
          }}
        >
          <Markers cars={cars} startDate={startDate} endDate={endDate} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapWithMarkers;
