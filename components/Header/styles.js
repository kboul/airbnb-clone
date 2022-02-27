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

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    display: none;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  padding: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-left: 15px;
`;

const Container = styled.div`
  position: sticky;
  top: 0px;
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 0.5rem; /* 20px */

  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    display: flex;
    padding: 20px;
  }
`;

const HostText = styled.p`
  justify-content: flex-end;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.5rem; /* 40px */
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
  /* Extra Small Devices, .visible-xs-* */
  @media (max-width: 767px) {
    display: none;
  }
`;

const MuiLanguageIcon = styled(LanguageIcon)`
  padding-left: 5px;
`;

const MuiMenuIcon = styled(MenuIcon)`
  margin-right: 5px;
`;

const MuiSearchIcon = styled(SearchIcon)`
  display: inline-flex;
  background-color: #ff385c;
  border-radius: 50%;
  color: rgb(255 255 255);
  cursor: pointer;
  padding: 3px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-width: 2px;
  border-radius: 9999px;
  flex-grow: 1;
`;

const SearchInput = styled(TextField)`
  width: 100%;
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
  Container,
  HostText,
  ImageContainer,
  MuiLanguageIcon,
  MuiMenuIcon,
  MuiSearchIcon,
  SearchContainer,
  SearchInput
};
