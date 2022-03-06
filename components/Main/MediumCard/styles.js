import Image from "next/image";
import styled from "styled-components";

const CardImage = styled(Image)`
  border-radius: 0.75rem; /* 12px */
`;

const Container = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 20rem; /* 320px */
  width: 20rem; /* 320px */
`;

const TitleH3 = styled.h3`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  margin-top: 0.75rem; /* 12px */
`;

export default { CardImage, Container, ImageContainer, TitleH3 };
