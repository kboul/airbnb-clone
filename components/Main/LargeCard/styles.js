import Image from "next/image";
import styled from "styled-components";

const Button = styled.button`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: rgb(255 255 255);
  background-color: rgb(17 24 39);
  border: 0px;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  border-radius: 0.75rem; /* 12px */
  margin-top: 1.25rem; /* 20px */
  cursor: pointer;

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    margin-top: 0rem; /* 20px */
  }
`;

const Container = styled.div`
  position: relative;
  padding-top: 4rem; /* 64px */
  padding-bottom: 4rem; /* 64px */
  cursor: pointer;
`;

const CardImage = styled(Image)`
  border-radius: 1rem; /* 16px */
`;

const CardImageContainer = styled.div`
  position: relative;
  height: 24rem; /* 384px */
  min-width: 300px;
`;

const Description = styled.p``;

const MetaContainer = styled.div`
  position: absolute;
  top: 8rem; /* 128px */
  left: 3rem; /* 48px */

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    top: 3rem; /* 128px */
    left: 1.5rem; /* 48px */
  }
`;

const Title = styled.h3`
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem; /* 40px */
  margin-bottom: 0.75rem; /* 12px */
  width: 16rem; /* 256px */
`;

export default {
  Button,
  CardImage,
  CardImageContainer,
  Container,
  Description,
  MetaContainer,
  Title
};
