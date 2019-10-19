import React from "react";
import HeaderStyles from "./styles/HeaderStyles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <h1>Clientes</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Agregar Cliente</Link>
          </li>
          <li>
            <Link to="/clients">Lista de Clientes</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
