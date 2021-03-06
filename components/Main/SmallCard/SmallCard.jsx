import { useCallback } from "react";

import Styled from "./styles";
import { useStore } from "../../../hooks";

export default function SmallCard() {
  const exploreLocations = useStore(
    useCallback(state => state.exploreLocations, [])
  );

  return exploreLocations?.map(({ distance, id, img, location }) => (
    <Styled.Container key={id}>
      <Styled.CardImageContainer>
        <Styled.CardImage src={img} layout="fill" />
      </Styled.CardImageContainer>

      <Styled.InfoContainer>
        <Styled.LocationH3>{location}</Styled.LocationH3>
        <Styled.DistanceH4>{distance}</Styled.DistanceH4>
      </Styled.InfoContainer>
    </Styled.Container>
  ));
}
