import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName";
import styled from "styled-components";

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
`;
