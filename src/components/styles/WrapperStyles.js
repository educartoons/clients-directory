import styled from "styled-components";

const WrapperStyles = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  > div,
  form {
    box-flex: 1;
    flex-basis: 0;
    flex-grow: 1;
    padding: 0 1em;
  }
`;

export default WrapperStyles;
