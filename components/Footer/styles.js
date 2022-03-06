import styled from "styled-components";

const ItemHeader = styled.h4`
  font-weight: bold;
`;

const ItemContainer = styled.div`
  row-gap: 1rem; /* 16px */
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: rgb(31 41 55);
`;

const ItemParagraph = styled.p``;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 2.5rem; /* 40px */
  padding-left: 8rem; /* 128px */
  padding-right: 8rem; /* 128px */
  padding-top: 3.5rem; /* 56px */
  padding-bottom: 3.5rem; /* 56px */
  background-color: rgb(243 244 246);
  color: rgb(75 85 99);

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default { ItemHeader, ItemContainer, ItemParagraph, Container };
