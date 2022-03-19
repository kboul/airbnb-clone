import Styled from "./styles";
import { exploreLocation as exploreLocationModel } from "../../../models/exploreLocations";

export default function SmallCard({ distance, id, img, location }) {
  return (
    <Styled.Container key={id}>
      <Styled.CardImageContainer>
        <Styled.CardImage src={img} layout="fill" />
      </Styled.CardImageContainer>

      <Styled.InfoContainer>
        <Styled.LocationH3>{location}</Styled.LocationH3>
        <Styled.DistanceH4>{distance}</Styled.DistanceH4>
      </Styled.InfoContainer>
    </Styled.Container>
  );
}

SmallCard.propTypes = exploreLocationModel;
