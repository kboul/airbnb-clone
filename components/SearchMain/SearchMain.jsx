import PropTypes from "prop-types";

import Styled from "./styles";
import { bubbleOptions } from "./constants";

export default function SearchMain({ numOfGuests, location, range }) {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.InfoMessage>
          300+ stays - {range} - for {numOfGuests} guests
        </Styled.InfoMessage>
        <Styled.StaysHeader>Stays in {location}</Styled.StaysHeader>

        <Styled.BubbleOptionContainer>
          {bubbleOptions.map(option => (
            <Styled.BubbleOption key={option}>{option}</Styled.BubbleOption>
          ))}
        </Styled.BubbleOptionContainer>
      </Styled.Section>
    </Styled.Container>
  );
}

SearchMain.propTypes = {
  numOfGuests: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired
};
