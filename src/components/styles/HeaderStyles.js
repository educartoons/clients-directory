import styled from "styled-components";

const HeaderStyles = styled.header`
  background-color: #282828;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  h1 {
    color: #ffffff;
  }
  a {
    text-decoration: none;
  }
  nav {
    display: flex;
    list-style: none;
    li {
      display: inline-block;
      margin: 0 0 0 1em;
      a {
        color: #999999;
        font-size: 1em;
        text-decoration: none;
      }
    }
  }
`;

export default HeaderStyles;
