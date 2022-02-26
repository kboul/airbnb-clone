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
        <Styled.SearchInput placeholder="Start your search" />
      </Styled.SearchContainer>
    </Styled.ImgHeader>
  );
}
