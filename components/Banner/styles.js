import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  height: 300px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 400px;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    height: 400px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    height: 300px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 500px;
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    height: 600px;
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    height: 700px;
  }
`;

export default { ImageContainer };
