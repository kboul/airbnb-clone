import styled from "styled-components";
import GlobeAltIcon from "@heroicons/react/solid/GlobeAltIcon";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import SearchIcon from "@heroicons/react/solid/SearchIcon";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";

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
  cursor: pointer;
`;

const Container = styled.div`
  position: sticky;
  top: 0px;
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 1.25rem; /* 20px */

  // Small Devices
  @media (max-width: 767px) {
    display: flex;
    padding-left: 2.5rem; /* 40px */
    padding-right: 2.5rem; /* 40px */
  }
`;

const DateRangePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 3 / span 3;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const GuestsHeader = styled.h2`
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  padding-left: 0.5rem; /* 8px */
`;

const HeroSearchIcon = styled(SearchIcon)`
  height: 2rem; /* 32px */
  background-color: rgb(248 113 113);
  border-radius: 9999px;
  color: rgb(255 255 255);
  cursor: pointer;
  padding: 0.5rem; /* 8px */
  margin-left: 0.5rem; /* 8px */
  margin-right: 0.5rem; /* 8px */

  @media (min-width: 767px) and (max-width: 850px) {
    display: none;
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

  // Small Devices
  @media (max-width: 767px) {
    display: none;
  }
`;

const HeroGlobeAltIcon = styled(GlobeAltIcon)`
  padding-left: 5px;
  height: 1.5rem; /* 24px */
  cursor: pointer;
`;

const HeroMenuIcon = styled(MenuIcon)`
  margin-right: 5px;
  height: 1.5rem; /* 24px */
`;

const HeroUserCircleIcon = styled(UserCircleIcon)`
  height: 1.5rem; /* 24px */
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 9999px;
  padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  padding-left: 1.25rem; /* 20px */

  // Small devices
  @media (max-width: 767px) {
    width: 100%;
  }

  // Medium Devices
  @media (min-width: 768px) and (max-width: 1200px) {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
`;

const SearchInput = styled.input`
  display: flex;
  border: none;
  background-color: transparent;
  outline: 2px solid transparent;
  outline-offset: 2px;
  flex-grow: 1;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: rgb(75 85 99);

  ::placeholder {
    color: #cbd5e0;
  }
`;

export default {
  AvatarContainer,
  AppBarRightContainer,
  Container,
  DateRangePickerContainer,
  GuestsHeader,
  HeroGlobeAltIcon,
  HeroMenuIcon,
  HeroSearchIcon,
  HeroUserCircleIcon,
  HostText,
  ImageContainer,
  SearchInputContainer,
  SearchInput
};
