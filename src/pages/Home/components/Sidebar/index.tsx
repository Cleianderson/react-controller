import React from "react";
import { Link } from "react-router-dom";

import { Container, Button } from "./styles";

function Sidebar() {
  return (
    <Container>
      <Button>Semana</Button>
      <Link to="/warns">
        <Button>Avisos</Button>
      </Link>
      <Link to="/suggestions">
        <Button>Sugestões</Button>
      </Link>
      <Button>Respostas</Button>
    </Container>
  );
}

export default Sidebar;
