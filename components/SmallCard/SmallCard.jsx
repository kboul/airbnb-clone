import Image from "next/image";
import styled from "styled-components";

import { exploreItem } from "../../models/exploreData";

export default function SmallCard({ distance, id, img, location }) {
  return (
    <Container key={id}>
      <CardImageContainer>
        <CardImage src={img} layout="fill" />
      </CardImageContainer>

      <InfoContainer>
        <LocationH3>{location}</LocationH3>
        <DistanceH4>{distance}</DistanceH4>
      </InfoContainer>
    </Container>
  );
}

SmallCard.propTypes = exploreItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  // margin: 0.5rem; /* 8px */
  //  margin-left: 1rem; /* 16px */
  border-radius: 0.75rem; /* 12px */
  cursor: pointer;

  &:hover {
    background-color: rgb(243 244 246);
    transform: scale(1.05);
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const CardImage = styled(Image)`
  border-radius: 0.5rem; /* 8px */
`;

const CardImageContainer = styled.div`
  // layout fill will occupy the whole screen
  // it has to be relative to the container
  position: relative;
  height: 4rem; /* 64px */
  width: 4rem; /* 64px */
  margin-right: 1rem; // extra
`;

const InfoContainer = styled.div``;

const LocationH3 = styled.h3``;

const DistanceH4 = styled.h4`
  color: rgb(107 114 128);
`;
