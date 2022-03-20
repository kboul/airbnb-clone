import { useCallback, useMemo, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import getCenter from "geolib/es/getCenter";

import Styled from "./styles";

const style = { width: "100%", height: "100%" };
const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL;

export default function Map({ popupInfo }) {
  const { latitude, longitude } = getCenter(popupInfo);

  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 11
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = info => () => setSelectedLocation(info);

  const handleMove = useCallback(viewport => setViewState(viewport), []);

  const handlePopupClose = () => setSelectedLocation(null);

  const pins = useMemo(
    () =>
      popupInfo.map((info, index) => (
        <Styled.MarkerContainer key={`marker-${index}`}>
          <Marker {...info}>
            <Styled.MarkerIcon
              aria-label="marker-pin"
              onClick={handleMarkerClick(info)}
              role="img">
              📌
            </Styled.MarkerIcon>
          </Marker>
        </Styled.MarkerContainer>
      )),
    [popupInfo]
  );

  return (
    <ReactMapGL
      {...viewState}
      style={style}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle={mapStyle}
      onMove={handleMove}>
      {pins}

      {selectedLocation && (
        <Popup
          anchor="bottom"
          closeOnClick={false}
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          onClose={handlePopupClose}>
          {selectedLocation.title}
        </Popup>
      )}
    </ReactMapGL>
  );
}

Map.propTypes = {
  popupInfo: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      title: PropTypes.string
    }).isRequired
  )
};
