import styled from "styled-components";

const ImgHeader = styled.header`
  position: sticky;
  z-index: 50;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: white;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 5px;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border-radius: 15px;
  padding-left: 5px;
  flex-grow: 1;
  border: 1px solid #dfdfdf;
  color: gray;
  font-size: small;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
`;

export default { ImgContainer, ImgHeader, SearchContainer, SearchInput };
