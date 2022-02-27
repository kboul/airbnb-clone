import styled from "styled-components";

const ExploreHeader = styled.h2`
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem; /* 40px */
  font-weight: 600;
  padding-bottom: 1.25rem; /* 20px */
`;

const MainContainer = styled.main`
  // creates spacing on the right left sides
  max-width: 80rem; /* 1280px */
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem; /* 32px */
  padding-right: 2rem; /* 32px */

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    padding-left: 4rem; /* 64px */
    padding-right: 4rem; /* 64px */
  }
`;

const Section = styled.section`
  padding-top: 1.5rem; /* 24px */
`;

export default { ExploreHeader, MainContainer, Section };
