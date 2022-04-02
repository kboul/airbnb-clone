import PropTypes from "prop-types";
import { useMemo, useCallback } from "react";

import InfoCard from "./InfoCard";
import Map from "../Map";
import Styled from "./styles";
import { useStore } from "../../hooks";
import { bubbleOptions } from "./constants";
import appartmentsModel from "../../models/appartments";

export default function SearchMain({
  numOfGuests,
  location,
  range,
  searchResults
}) {
  const changeCoordinates = useStore(state => state.changeCoordinates);

  const popupInfo = useMemo(
    () =>
      searchResults.map(({ long, lat, title }) => ({
        latitude: lat,
        longitude: long,
        title
      })),
    [searchResults]
  );

  const handleCardClick = useCallback(
    item => {
      changeCoordinates(item.lat, item.long);
    },
    [changeCoordinates]
  );

  return (
    <Styled.Container>
      <Styled.CardsSection>
        <Styled.InfoMessage>
          300+ stays - {range} - for {numOfGuests} guests
        </Styled.InfoMessage>
        <Styled.StaysHeader>Stays in {location}</Styled.StaysHeader>

        <Styled.BubbleOptionContainer>
          {bubbleOptions.map(option => (
            <Styled.BubbleOption key={option}>{option}</Styled.BubbleOption>
          ))}
        </Styled.BubbleOptionContainer>

        <Styled.SearchResultsContainer>
          {searchResults.map(item => (
            <InfoCard
              key={item.id}
              {...item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </Styled.SearchResultsContainer>
      </Styled.CardsSection>

      <Styled.MapSection>
        <Map popupInfo={popupInfo} />
      </Styled.MapSection>
    </Styled.Container>
  );
}

SearchMain.propTypes = {
  numOfGuests: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  ...appartmentsModel
};
