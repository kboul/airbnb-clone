import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import Styled from "./styles";
import exploreDataModel from "../../models/exploreData";
import cardsDataModel from "../../models/cardsData";

export default function Main({ cardsData, exploreData }) {
  return (
    <Styled.MainContainer>
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
    </Styled.MainContainer>
  );
}

Main.propTypes = { ...exploreDataModel, ...cardsDataModel };
