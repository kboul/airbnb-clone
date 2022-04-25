import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import Styled from "./styles";
import largeCard from "./largeCard.webp";

export default function Main() {
  return (
    <Styled.Container>
      <Styled.ExploreNearBySection>
        <Styled.ExploreHeader>Explore Nearby</Styled.ExploreHeader>

        <Styled.SmallCardContainer>
          <SmallCard />
        </Styled.SmallCardContainer>
      </Styled.ExploreNearBySection>

      <Styled.LiveAnywhereSection>
        <Styled.LiveAnywhereHeader>Live Anywhere</Styled.LiveAnywhereHeader>

        <Styled.MediumCardContainer>
          <MediumCard />
        </Styled.MediumCardContainer>
      </Styled.LiveAnywhereSection>

      <LargeCard
        buttonText="Get Inspired"
        description="Wishlists curated by Airbnb"
        img={largeCard}
        title="The Greatest Outdoors"
      />
    </Styled.Container>
  );
}
