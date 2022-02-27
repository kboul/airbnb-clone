import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Styled from "./styles";

export default function Header() {
  return (
    <Styled.ImgHeader>
      <Styled.ImgContainer>
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src="https://links.papareact.com/qd3"
        />
      </Styled.ImgContainer>

      <Styled.SearchContainer>
        <Styled.SearchInput
          InputProps={{ endAdornment: <Styled.MuiSearchIcon /> }}
          placeholder="Start your search"
          sx={{ input: { color: "gray", fontSize: "small" } }}
        />
      </Styled.SearchContainer>

      <Styled.AppBarRightContainer>
        <Styled.HostText>Become a host</Styled.HostText>
        <Styled.MuiLanguageIcon />

        <Styled.AvatarContainer>
          <Styled.MuiMenuIcon />
          <AccountCircleIcon />
        </Styled.AvatarContainer>
      </Styled.AppBarRightContainer>
    </Styled.ImgHeader>
  );
}
