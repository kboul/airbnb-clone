import styled from "styled-components";

const MarkerContainer = styled.div``;

const MarkerIcon = styled.p`
  cursor: pointer;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

export default { MarkerContainer, MarkerIcon };
