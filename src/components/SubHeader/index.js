import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import { Container, Button } from "./styles";

function SubHeader() {
  return (
    <Container>
      <Link to="/">
        <Button>
          <MdArrowBack size="30px" color="#1b2d4f" />
          voltar
        </Button>
      </Link>
    </Container>
  );
}

export default SubHeader;
