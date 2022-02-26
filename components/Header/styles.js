import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const HostText = styled.p``;

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

const MuiSearchIcon = styled(SearchIcon)`
  display: inline-flex;
  background-color: tomato;
  border-radius: 15px;
  padding: 2px;
  color: white;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const SearchInput = styled(TextField)`
  padding-left: 5px;
  flex-grow: 1;
  fieldset {
    border-radius: 25px;
  }
`;

export default {
  HostText,
  ImgContainer,
  ImgHeader,
  MuiSearchIcon,
  SearchContainer,
  SearchInput,
};
