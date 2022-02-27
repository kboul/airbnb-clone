import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 300px;
  cursor: pointer;

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    height: 77vh;
  }

  /* Small Devices, .visible-sm-* */
  @media (min-width: 768px) and (max-width: 991px) {
    height: 80vh;
  }

  /* Medium Devices, .visible-md-* */
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 80vh;
  }

  /* Large Devices, .visible-lg-* */
  @media (min-width: 1200px) {
    height: 80vh;
  }
`;

const BannerTextContainer = styled.div`
  position: absolute;
  top: 62%;
  width: 100%;
  text-align: center;
`;

const BannerText = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 36px;

  @media (max-width: 576px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const FlexibleButton = styled.button`
  color: rgb(168 85 247);
  border: 0px;
  background-color: #f7f7f7;
  padding-left: 2.5rem; /* 40px */
  padding-right: 2.5rem; /* 40px */
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  font-weight: bold;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;

export default {
  BannerText,
  BannerTextContainer,
  Container,
  FlexibleButton,
};
