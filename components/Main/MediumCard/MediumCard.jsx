import Styled from "./styles";
import { cardItem } from "../../../models/cardsData";

export default function MediumCard({ img, title }) {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.CardImage layout="fill" src={img} />
      </Styled.ImageContainer>
      <Styled.TitleH3>{title}</Styled.TitleH3>
    </Styled.Container>
  );
}

MediumCard.propTypes = cardItem;
