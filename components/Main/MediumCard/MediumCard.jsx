import { useCallback } from "react";

import { useStore } from "../../../hooks";
import Styled from "./styles";

export default function MediumCard() {
  const cards = useStore(useCallback(state => state.cards, []));

  return cards?.map(({ id, img, title }) => (
    <Styled.Container key={id}>
      <Styled.ImageContainer>
        <Styled.CardImage layout="fill" src={img} />
      </Styled.ImageContainer>
      <Styled.TitleH3>{title}</Styled.TitleH3>
    </Styled.Container>
  ));
}
