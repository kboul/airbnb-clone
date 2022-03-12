import Styled from "./styles";
import { bubbleOptions } from "./constants";

export default function SearchMain() {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.InfoMessage>
          300+ stays for 5 number of guests
        </Styled.InfoMessage>
        <Styled.StaysHeader>Stays in Mars</Styled.StaysHeader>

        <Styled.BubbleOptionContainer>
          {bubbleOptions.map(option => (
            <Styled.BubbleOption key={option}>{option}</Styled.BubbleOption>
          ))}
        </Styled.BubbleOptionContainer>
      </Styled.Section>
    </Styled.Container>
  );
}
