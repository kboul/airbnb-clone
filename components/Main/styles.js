import styled, { css } from "styled-components";

const h2Styles = css`
  font-size: 33px;
  line-height: 37px;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Container = styled.main`
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

const ExploreH2 = styled.h2`
  // all official
  ${h2Styles}
`;

const ExploreNearBySection = styled.section`
  padding-top: 1.5rem; /* 24px */
`;

const LiveAnywhereH2 = styled.h2`
  ${h2Styles}
  padding-top: 2rem; /* 32px */
  padding-bottom: 2rem; /* 32px */
`;

const LiveAnywhereSection = styled.section``;

const MediumCardContainer = styled.div`
  display: flex;
  gap: 15px;

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    overflow-x: scroll;
  }
`;

const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  /* Small Devices, .visible-sm-* */
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Large Devices, .visible-lg-* */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default {
  Container,
  ExploreH2,
  ExploreNearBySection,
  LiveAnywhereH2,
  LiveAnywhereSection,
  MediumCardContainer,
  SmallCardContainer
};
