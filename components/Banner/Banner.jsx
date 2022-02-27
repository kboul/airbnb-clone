import Image from "next/image";

import Styled from "./styles";
import bannerImage from "./airbnb-banner.webp";

export default function Banner() {
  return (
    <Styled.Container>
      <Image layout="fill" objectFit="cover" priority src={bannerImage} />

      <Styled.BannerTextContainer>
        <Styled.BannerText>Not sure where to go? Perfect.</Styled.BannerText>
        <Styled.FlexibleButton>I’m flexible</Styled.FlexibleButton>
      </Styled.BannerTextContainer>
    </Styled.Container>
  );
}
