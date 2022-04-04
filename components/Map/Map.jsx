import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import getCenter from "geolib/es/getCenter";

import Styled from "./styles";
import { useStore } from "../../hooks";

const style = { width: "100%", height: "100%" };
const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL;

function Map({ popupInfo }) {
  const appartmentLat = useStore(useCallback(state => state.appartmentLat, []));
  const appartmentLng = useStore(useCallback(state => state.appartmentLng, []));

  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef?.current;
    if (!map || !appartmentLat || !appartmentLng) return;

    map.flyTo({ center: [appartmentLng, appartmentLat], zoom: 14 });
  }, [appartmentLat, appartmentLng]);

  const { latitude, longitude } = getCenter(popupInfo);

  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 11
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const pins = useMemo(
    () =>
      popupInfo.map((info, index) => (
        <Styled.MarkerContainer key={`marker-${index}`}>
          <Marker {...info}>
            <Styled.MarkerIcon
              aria-label="marker-pin"
              onClick={() => setSelectedLocation(info)}
              role="img">
              📌
            </Styled.MarkerIcon>
          </Marker>
        </Styled.MarkerContainer>
      )),
    []
  );

  return (
    <ReactMapGL
      {...viewState}
      style={style}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle={mapStyle}
      onMove={evt => setViewState(evt.viewState)}
      ref={mapRef}>
      {pins}

      {selectedLocation && (
        <Popup
          anchor="bottom"
          closeOnClick={false}
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          onClose={() => setSelectedLocation(null)}>
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

export default memo(Map);
