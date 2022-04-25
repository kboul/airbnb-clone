import PropTypes from "prop-types";

import InfoCard from "./InfoCard";
import Map from "../Map";
import Styled from "./styles";
import { bubbleOptions } from "./constants";

export default function SearchMain({ numOfGuests, location, range }) {
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
          <InfoCard />
        </Styled.SearchResultsContainer>
      </Styled.CardsSection>

      <Styled.MapSection>
        <Map />
      </Styled.MapSection>
    </Styled.Container>
  );
}

SearchMain.propTypes = {
  numOfGuests: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired
};
