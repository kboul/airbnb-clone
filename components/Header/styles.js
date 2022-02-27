import TextField from "@mui/material/TextField";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const AppBarRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: gray;
`;

const AvatarContainer = styled.div`
  display: flex;
  padding: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-left: 15px;
`;

const HostText = styled.p`
  justify-content: flex-end;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImgHeader = styled.header`
  position: sticky;
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
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

const MuiLanguageIcon = styled(LanguageIcon)`
  padding-left: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MuiMenuIcon = styled(MenuIcon)`
  margin-right: 5px;
`;

const MuiSearchIcon = styled(SearchIcon)`
  display: inline-flex;
  background-color: tomato;
  border-radius: 15px;
  padding: 3px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 2px;
  justify-content: center;
`;

const SearchInput = styled(TextField)`
  padding-left: 5px;
  flex-grow: 1;
  fieldset {
    border-radius: 25px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default {
  AvatarContainer,
  AppBarRightContainer,
  HostText,
  ImgContainer,
  ImgHeader,
  MuiLanguageIcon,
  MuiMenuIcon,
  MuiSearchIcon,
  SearchContainer,
  SearchInput,
};
