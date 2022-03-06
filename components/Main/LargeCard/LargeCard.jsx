import PropTypes from "prop-types";

import Styled from "./styles";

export default function LargeCard({ buttonText, description, img, title }) {
  return (
    <Styled.Container>
      <Styled.CardImageContainer>
        <Styled.CardImage layout="fill" objectFit="cover" src={img} />
      </Styled.CardImageContainer>

      <Styled.MetaContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        <Styled.Button>{buttonText}</Styled.Button>
      </Styled.MetaContainer>
    </Styled.Container>
  );
}

LargeCard.propTypes = {
  buttonText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};
