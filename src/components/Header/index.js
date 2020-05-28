import React from "react";

import { Container, Image } from "./styles";

function Header() {
  return (
    <Container>
      <Image src={require("../../assets/icon.png")} alt='' />
    </Container>
  );
}

export default Header;
