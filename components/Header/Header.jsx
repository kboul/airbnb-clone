import Image from "next/image";

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
        <Styled.HeroGlobeAltIcon />

        <Styled.AvatarContainer>
          <Styled.HeroMenuIcon />
          <Styled.HeroUserCircleIcon />
        </Styled.AvatarContainer>
      </Styled.AppBarRightContainer>
    </Styled.Container>
  );
}
