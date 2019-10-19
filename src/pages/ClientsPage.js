import React, { Component } from "react";
import styled from "styled-components";

import Clients from "../components/Clients";
import Insights from "../components/Insights";

const Wrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  > div {
    box-flex: 1;
    flex-basis: 0;
    flex-grow: 1;
    padding: 0 1em;
  }
`;

class ClientsPage extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>Clientes:</h2>
          <Clients />
        </div>
        <div>
          <h2>Insights:</h2>
          <Insights />
        </div>
      </Wrapper>
    );
  }
}

export default ClientsPage;
