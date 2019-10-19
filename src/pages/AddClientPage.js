import React, { Component } from "react";
import styled from "styled-components";
import AddClient from "../components/AddClient";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

class AddClientPage extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <AddClient />
        </div>
        <div>{/* <h2>Clientes Recientemente agregados</h2> */}</div>
      </Wrapper>
    );
  }
}

export default AddClientPage;
