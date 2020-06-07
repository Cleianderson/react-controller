import React from "react";

import {
  Container,
  Content,
  Close,
} from "./styles";

import Table from '../../../../components/Table'

const KEYS_VALUES: { [key: string]: string } = {
  p1: "Prato Prin. 1",
  p2: "Prato Prin. 2",
  gua: "Guarnição",
  fag: "Fast Grill",
  gre: "Na Grelha",
  veg: "Vegetariano",
  sob: "Sobremesa",
  sal: "Sal. Crua",
  sco: "Sal. Cozida",
  sopa: "Sopa",
  suc: "Suco",
};

const View: React.FC<{ week: TWeek; onClose: () => void }> = ({
  onClose,
  week,
}) => {
  return (
    <Container>
      <Content>
        <Table type="almoco" week={week.data} label="Almoço" />
        <Table type="jantar" week={week.data} label="Jantar" />
      </Content>
      <Close onClick={onClose}>fechar</Close>
    </Container>
  );
};

export default View;
