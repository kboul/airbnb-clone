import PropTypes from "prop-types";

import Styled from "./styles";
import { appartment as appartmentModel } from "../../../models/appartments";

export default function InfoCard({
  description,
  img,
  location,
  onClick,
  price,
  star,
  title,
  total
}) {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.ImageContainer>
        <Styled.InfoImage layout="fill" objectFit="cover" priority src={img} />
      </Styled.ImageContainer>

      <Styled.InfoDetailsContainer>
        <Styled.LocationContainer>
          <Styled.Location>{location}</Styled.Location>
          <Styled.HeroHeartIcon />
        </Styled.LocationContainer>

        <Styled.TitleHeader>{title}</Styled.TitleHeader>

        <Styled.Hr />

        <Styled.Description>{description}</Styled.Description>

        <Styled.StarCostContainer>
          <Styled.StarText>
            <Styled.HeroStarIcon fill="#fe595e" />
            {star}
          </Styled.StarText>

          <Styled.CostContainer>
            <Styled.Price>{price}</Styled.Price>
            <Styled.Total>{total}</Styled.Total>
          </Styled.CostContainer>
        </Styled.StarCostContainer>
      </Styled.InfoDetailsContainer>
    </Styled.Container>
  );
}

InfoCard.propTypes = { ...appartmentModel, onClick: PropTypes.func.isRequired };
