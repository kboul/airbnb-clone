import Image from "next/image";

import Styled from "./styles";

export default function Banner() {
  return (
    <Styled.ImageContainer>
      <Image
        layout="fill"
        objectFit="contain"
        src="https://links.papareact.com/0fm"
      />
    </Styled.ImageContainer>
  );
}
