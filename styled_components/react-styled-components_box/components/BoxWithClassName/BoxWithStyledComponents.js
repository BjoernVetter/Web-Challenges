import styled from "styled-components";

export default styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({$isBlack}) => ($isBlack ? "black" : "green")} ;
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
