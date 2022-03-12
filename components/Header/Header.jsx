import { useState } from "react";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import Styled from "./styles";
import airbnbLogo from "./airbnb-logo.png";
import { getSelectionRange } from "./utils";
import { rangeColors } from "./constants";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = getSelectionRange(startDate, endDate);

  const handleSearchInputChange = e => setSearchInput(e.target.value);

  const handleDateSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setStartDate(ranges.selection.endDate);
  };

  const handleNumOfGuestsChange = e => setNumOfGuests(e.target.value);

  const handleCancelClick = () => setSearchInput("");

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src={airbnbLogo}
        />
      </Styled.ImageContainer>

      <Styled.SearchInputContainer>
        <Styled.SearchInput
          onChange={handleSearchInputChange}
          placeholder="Where are you going?"
          value={searchInput}
        />
        <Styled.HeroSearchIcon />
      </Styled.SearchInputContainer>

      <Styled.AppBarRightContainer>
        <Styled.HostText>Become a host</Styled.HostText>
        <Styled.HeroGlobeAltIcon />

        <Styled.AvatarContainer>
          <Styled.HeroMenuIcon />
          <Styled.HeroUserCircleIcon />
        </Styled.AvatarContainer>
      </Styled.AppBarRightContainer>

      {searchInput && (
        <Styled.DateRangePickerContainer>
          <DateRangePicker
            minDate={new Date()}
            onChange={handleDateSelect}
            rangeColors={rangeColors}
            ranges={[selectionRange]}
          />
          <Styled.NumberOfGuestsContainer>
            <Styled.NumberOfGuestsHeader>
              Number of Guests
            </Styled.NumberOfGuestsHeader>
            <Styled.HeroUsersIcon />
            <Styled.NumberOfGuestsInput
              min={1}
              onChange={handleNumOfGuestsChange}
              type="number"
              value={numOfGuests}
            />
          </Styled.NumberOfGuestsContainer>
          <Styled.ButtonContainer>
            <Styled.CancelButton onClick={handleCancelClick}>
              Cancel
            </Styled.CancelButton>
            <Styled.SearchButton>Search</Styled.SearchButton>
          </Styled.ButtonContainer>
        </Styled.DateRangePickerContainer>
      )}
    </Styled.Container>
  );
}
