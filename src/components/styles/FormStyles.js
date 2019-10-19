import styled from "styled-components";

const FormStyles = styled.form`
  background-color: #ffffff;
  padding: 1em;
  fieldset {
    position: relative;
    border: 0;
    z-index: 0;
  }
  label {
    color: #868585;
    display: block;
    font-size: 0.85em;
    margin: 0 0 1em 0;
    input {
      display: block;
      font-size: 1.25em;
      font-family: "Muli", sans-serif;
      height: 50px;
      padding: 0.5em;
      width: 100%;
    }
  }
  button {
    background-color: #783ff3;
    border: 0;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-family: "Muli", sans-serif;
    font-size: 1em;
    margin: 0 0 1em 0;
    padding: 0.9em 1.2em;
    &:disabled {
      background-color: #9f85da;
    }
  }
  p {
    color: #868585;
    font-size: 0.75em;
  }
  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    margin: 0 0 1em 0;
    padding: 1em;
    a {
      color: #155724;
    }
  }
`;

export default FormStyles;
