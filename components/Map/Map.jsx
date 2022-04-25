import { useCallback, useEffect, useMemo, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getCenter from "geolib/es/getCenter";

import Styled from "./styles";
import { useStore } from "../../hooks";

const style = { width: "100%", height: "100%" };
const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL;

export default function Map() {
  const searchResults = useStore(useCallback(state => state.searchResults, []));
  const viewState = useStore(useCallback(state => state.viewState, []));
  const setGlobalState = useStore(
    useCallback(state => state.setGlobalState, [])
  );

  const popupInfo = useMemo(
    () =>
      searchResults?.map(({ long, lat, title }) => ({
        latitude: lat,
        longitude: long,
        title
      })),
    [searchResults]
  );

  useEffect(() => {
    const { latitude, longitude } = getCenter(popupInfo);
    if (searchResults?.length > 0)
      setGlobalState({ viewState: { ...viewState, latitude, longitude } });
  }, [searchResults]);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const pins = useMemo(
    () =>
      popupInfo?.map((info, index) => (
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
    [popupInfo]
  );

  return (
    <ReactMapGL
      {...viewState}
      style={style}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle={mapStyle}
      onMove={evt => setGlobalState({ viewState: evt.viewState })}>
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
