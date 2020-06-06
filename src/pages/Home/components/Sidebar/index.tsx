import React from "react";
import { Link } from "react-router-dom";

import { Container, Button } from "./styles";

function Sidebar() {
  return (
    <Container>
      <Link to="/weeks">
        <Button>Semanas</Button>
      </Link>
      <Link to="/warns">
        <Button>Avisos</Button>
      </Link>
      <Link to="/suggestions">
        <Button>Sugestões</Button>
      </Link>
      <Link to="/answers">
        <Button>Respostas</Button>
      </Link>
    </Container>
  );
}

export default Sidebar;
