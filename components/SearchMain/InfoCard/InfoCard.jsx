import { useCallback } from "react";

import Styled from "./styles";
import { useStore } from "../../../hooks";

export default function InfoCard() {
  const searchResults = useStore(useCallback(state => state.searchResults, []));
  const setGlobalState = useStore(
    useCallback(state => state.setGlobalState, [])
  );

  const handleCardClick = item => {
    setGlobalState({
      viewState: { latitude: item.lat, longitude: item.long, zoom: 14 }
    });
  };

  return searchResults?.map(item => (
    <Styled.Container key={item.id} onClick={() => handleCardClick(item)}>
      <Styled.ImageContainer>
        <Styled.InfoImage
          layout="fill"
          objectFit="cover"
          priority
          src={item.img}
        />
      </Styled.ImageContainer>

      <Styled.InfoDetailsContainer>
        <Styled.LocationContainer>
          <Styled.Location>{item.location}</Styled.Location>
          <Styled.HeroHeartIcon />
        </Styled.LocationContainer>

        <Styled.TitleHeader>{item.title}</Styled.TitleHeader>

        <Styled.Hr />

        <Styled.Description>{item.description}</Styled.Description>

        <Styled.StarCostContainer>
          <Styled.StarText>
            <Styled.HeroStarIcon fill="#fe595e" />
            {item.star}
          </Styled.StarText>

          <Styled.CostContainer>
            <Styled.Price>{item.price}</Styled.Price>
            <Styled.Total>{item.total}</Styled.Total>
          </Styled.CostContainer>
        </Styled.StarCostContainer>
      </Styled.InfoDetailsContainer>
    </Styled.Container>
  ));
}
