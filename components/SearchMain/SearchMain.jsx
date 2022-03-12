import { useRouter } from "next/router";
import { format } from "date-fns";

import Styled from "./styles";
import { bubbleOptions } from "./constants";

export default function SearchMain() {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.InfoMessage>
          300+ stays - {range} - for {numOfGuests} guests
        </Styled.InfoMessage>
        <Styled.StaysHeader>Stays in {location}</Styled.StaysHeader>

        <Styled.BubbleOptionContainer>
          {bubbleOptions.map(option => (
            <Styled.BubbleOption key={option}>{option}</Styled.BubbleOption>
          ))}
        </Styled.BubbleOptionContainer>
      </Styled.Section>
    </Styled.Container>
  );
}
