import styled from "styled-components";
import GlobeAltIcon from "@heroicons/react/solid/GlobeAltIcon";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import SearchIcon from "@heroicons/react/solid/SearchIcon";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import UsersIcon from "@heroicons/react/solid/UsersIcon";

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CancelButton = styled(Button)`
  color: rgb(107 114 128);
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
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const DateRangePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 3 / span 3;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  @media (max-width: 767px) {
    margin-left: 0px;
    margin-right: 0px;
  }
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

const HeroUsersIcon = styled(UsersIcon)`
  height: 1.25rem; /* 20px */
`;

const HostText = styled.p`
  justify-content: flex-end;
  cursor: pointer;

  @media (max-width: 767px) {
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

const NumberOfGuestsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem; /* 16px */
`;

const NumberOfGuestsHeader = styled.h2`
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  font-weight: 600;
  flex-grow: 1;
  margin-bottom: 0px;
`;

const NumberOfGuestsInput = styled.input`
  width: 3rem; /* 48px */
  padding-left: 0.5rem; /* 8px */
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  color: rgb(248 113 113);
  border: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
`;

const SearchButton = styled(Button)`
  color: rgb(248 113 113);
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 9999px;
  padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  padding-left: 1.25rem; /* 20px */

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
  ButtonContainer,
  CancelButton,
  Container,
  DateRangePickerContainer,
  HeroGlobeAltIcon,
  HeroMenuIcon,
  HeroSearchIcon,
  HeroUserCircleIcon,
  HeroUsersIcon,
  HostText,
  ImageContainer,
  NumberOfGuestsContainer,
  NumberOfGuestsHeader,
  NumberOfGuestsInput,
  SearchButton,
  SearchInputContainer,
  SearchInput
};
