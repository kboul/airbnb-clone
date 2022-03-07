import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Styled from "./styles";
import airbnbLogo from "./airbnb-logo.png";

export default function Header() {
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
        <Styled.SearchInput placeholder="Where are you going?" />
        <Styled.HeroSearchIcon />
      </Styled.SearchInputContainer>

      <Styled.AppBarRightContainer>
        <Styled.HostText>Become a host</Styled.HostText>
        <Styled.MuiLanguageIcon />

        <Styled.AvatarContainer>
          <Styled.MuiMenuIcon />
          <AccountCircleIcon />
        </Styled.AvatarContainer>
      </Styled.AppBarRightContainer>
    </Styled.Container>
  );
}
