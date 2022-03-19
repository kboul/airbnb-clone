import styled from "styled-components";
import HeartIcon from "@heroicons/react/outline/HeartIcon";
import StarIcon from "@heroicons/react/solid/StarIcon";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  padding-top: 1.75rem; /* 28px */
  padding-bottom: 1.75rem; /* 28px */
  padding-left: 0.5rem; /* 8px */
  padding-right: 0.5rem; /* 8px */
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const CostContainer = styled.div``;

const Description = styled.p`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: rgb(107 114 128);
  flex-grow: 1;
  margin-top: 0px;
`;

const HeroHeartIcon = styled(HeartIcon)`
  height: 1.75rem; /* 28px */
  cursor: pointer;
`;

const HeroStarIcon = styled(StarIcon)`
  height: 1.25rem; /* 20px */
`;

const Hr = styled.div`
  width: 2.5rem; /* 40px */
  border-bottom: 1px solid #ddd;
  padding-top: 0.5rem; /* 8px */
  margin-bottom: 0.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 20rem; /* 320px */
  height: 13rem; /* 208px */
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 10rem; /* 160px */
    height: 6rem; /* 96px */
  }
`;

const InfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 1.25rem;
`;

const InfoImage = styled(Image)`
  border-radius: 1rem; /* 16px */
`;

const Location = styled.p`
  margin: 0px;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;

  // Large Devices
  @media (min-width: 1200px) {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  }
`;

const StarCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StarText = styled.p`
  display: flex;
  align-items: center;
`;

const TitleHeader = styled.h4`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  margin: 0px;
`;

const Total = styled.p`
  text-align: right;
  font-weight: 200;
`;

export default {
  Container,
  CostContainer,
  Description,
  HeroHeartIcon,
  HeroStarIcon,
  Hr,
  ImageContainer,
  InfoDetailsContainer,
  InfoImage,
  Location,
  LocationContainer,
  Price,
  StarCostContainer,
  StarText,
  TitleHeader,
  Total
};
