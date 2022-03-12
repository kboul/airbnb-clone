import styled from "styled-components";

const BubbleOption = styled.p`
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  border: 1px solid #ddd;
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  &:active {
    transform: scale(0.95);
    background-color: rgb(243 244 246);
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 100ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const BubbleOptionContainer = styled.div`
  display: none;

  /* Large Devices, .visible-lg-* */
  @media (min-width: 1200px) {
    display: inline-flex;
    margin-bottom: 1.25rem; /* 20px */
    color: rgb(31 41 55);
    white-space: nowrap;
    gap: 15px; //space-x-
  }
`;

const Container = styled.main`
  display: flex;
`;

const InfoMessage = styled.p`
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
`;

const Section = styled.section`
  flex-grow: 1;
  padding-top: 3.5rem; /* 56px */
  padding-left: 1.5rem; /* 24px */
  padding-right: 1.5rem; /* 24px */
`;

const StaysHeader = styled.h1`
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: 600;
  margin-top: 0.5rem; /* 8px */
  margin-bottom: 1.5rem; /* 24px */
`;

export default {
  BubbleOptionContainer,
  BubbleOption,
  Container,
  InfoMessage,
  Section,
  StaysHeader
};
