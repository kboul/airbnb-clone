import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <ImgHeader>
      <ImgContainer>
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src="https://links.papareact.com/qd3"
        />
      </ImgContainer>
    </ImgHeader>
  );
}

const ImgHeader = styled.header`
  position: sticky;
  z-index: 50;
  display: grid;
  grid-column: 3;
  background-color: white;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 5px;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  cursor: pointer;
`;
