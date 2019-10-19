import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import MainStyles from "./styles/MainStyles";

import AddClientPage from "../pages/AddClientPage";
import ClientsPage from "../pages/ClientsPage";
import ClientPage from "../pages/ClientPage";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,600,700&display=swap');
  html{
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after{
    box-sizing: border-box;
  }
  body{
    background-color:  #D7DCE4;
    padding: 0;
    margin: 0;
    font-family: 'Muli', sans-serif;
    font-size: 1em;
    line-height: 1.5;
  }
`;

const Application = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <MainStyles>
        <Switch>
          <Route exact path="/" component={AddClientPage} />
          <Route exact path="/clients" component={ClientsPage} />
          <Route exact path="/clients/:id" component={ClientPage} />
        </Switch>
      </MainStyles>
    </Fragment>
  );
};

export default Application;
