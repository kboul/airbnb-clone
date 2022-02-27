import SmallCard from "../SmallCard";

import Styled from "./styles";
import exploreDataModel from "../../models/exploreData";

export default function Main({ exploreData }) {
  return (
    <Styled.MainContainer>
      <Styled.Section>
        <Styled.ExploreH2>Explore Nearby</Styled.ExploreH2>

        <Styled.SmallCardContainer>
          {exploreData?.map(item => (
            <SmallCard key={item.id} {...item} />
          ))}
        </Styled.SmallCardContainer>
      </Styled.Section>
    </Styled.MainContainer>
  );
}

Main.propTypes = exploreDataModel;
