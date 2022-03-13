import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import Styled from "./styles";
import cardsDataModel from "../../models/cardsData";
import exploreLocationsModel from "../../models/exploreLocations";
import largeCard from "./largeCard.webp";

export default function Main({ cardsData, exploreLocations }) {
  return (
    <Styled.Container>
      <Styled.ExploreNearBySection>
        <Styled.ExploreHeader>Explore Nearby</Styled.ExploreHeader>

        <Styled.SmallCardContainer>
          {exploreLocations?.map(item => (
            <SmallCard key={item.id} {...item} />
          ))}
        </Styled.SmallCardContainer>
      </Styled.ExploreNearBySection>

      <Styled.LiveAnywhereSection>
        <Styled.LiveAnywhereHeader>Live Anywhere</Styled.LiveAnywhereHeader>

        <Styled.MediumCardContainer>
          {cardsData.map(item => (
            <MediumCard key={item.id} {...item} />
          ))}
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

Main.propTypes = { ...exploreLocationsModel, ...cardsDataModel };
