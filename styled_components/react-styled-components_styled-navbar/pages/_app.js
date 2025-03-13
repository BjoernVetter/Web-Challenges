import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;
const LinkStyle = styled.a `
text-decoration: none;
color: red;
font-size: 18px;

&:hover{
  color: black;
  text-decoration: underline;
}
`;



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <LinkStyle href="/">Home</LinkStyle>
          </li>
          <li>
            <LinkStyle href="/about">About</LinkStyle>
          </li>
          <li>
            <LinkStyle href="/contact">Contact</LinkStyle>
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}












