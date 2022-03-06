import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import Styled from "./styles";
import cardsDataModel from "../../models/cardsData";
import exploreDataModel from "../../models/exploreData";
import largeCard from "./largeCard.webp";

export default function Main({ cardsData, exploreData }) {
  return (
    <Styled.Container>
      <Styled.ExploreNearBySection>
        <Styled.ExploreH2>Explore Nearby</Styled.ExploreH2>

        <Styled.SmallCardContainer>
          {exploreData?.map(item => (
            <SmallCard key={item.id} {...item} />
          ))}
        </Styled.SmallCardContainer>
      </Styled.ExploreNearBySection>

      <Styled.LiveAnywhereSection>
        <Styled.LiveAnywhereH2>Live Anywhere</Styled.LiveAnywhereH2>

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

Main.propTypes = { ...exploreDataModel, ...cardsDataModel };
