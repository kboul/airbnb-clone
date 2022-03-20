import { useCallback, useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import getCenter from "geolib/es/getCenter";

const style = { width: "100%", height: "100%" };
const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = "mapbox://styles/kboul/cl0z9cai5002q14qjjb0phscw";

export default function Map({ locationsCoordinates }) {
  const { latitude, longitude } = getCenter(locationsCoordinates);

  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 11
  });

  const handleMove = useCallback(viewport => setViewState(viewport), []);

  return (
    <ReactMapGL
      {...viewState}
      style={style}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle={mapStyle}
      onMove={handleMove}
    />
  );
}

Map.propTypes = {
  locationsCoordinates: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  )
};
