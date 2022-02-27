import Image from "next/image";

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

      <Styled.AvatarContainer>
        <Styled.HostText>Become a host</Styled.HostText>
        <Styled.MuiLanguageIcon />
      </Styled.AvatarContainer>
    </Styled.ImgHeader>
  );
}
