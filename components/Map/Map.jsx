import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const style = { width: "100%", height: "100%" };
const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = "mapbox://styles/kboul/cl0z9cai5002q14qjjb0phscw";

export default function Map() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5
  });

  return (
    <ReactMapGL
      {...viewState}
      style={style}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle={mapStyle}
    />
  );
}
