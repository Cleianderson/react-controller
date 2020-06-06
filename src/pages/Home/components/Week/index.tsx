import React from "react";

import {
  Container,
  Content,
  Header,
  Table,
  TRow,
  THead,
  TData,
  TableContent,
} from "./styles";

type props = {
  item: WeekDay;
  index: number;
};

const DAYS = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
];
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

const Week: React.FC<props> = ({ item, index }) => {
  return (
    <Container>
      <Content>
        <Header>{DAYS[index]}</Header>
        <TableContent>
          <Table>
            <TRow>
              <THead></THead>
              <THead style={{ textAlign: "center" }}>Almoço</THead>
              <THead style={{ textAlign: "center" }}>Jantar</THead>
            </TRow>
            {Object.keys(KEYS_VALUES).map((val) => (
              <TRow>
                <THead>{KEYS_VALUES[val]}</THead>
                <TData>{item.almoco[val] ?? "*****"}</TData>
                <TData>{item.jantar[val] ?? "*****"}</TData>
              </TRow>
            ))}
          </Table>
        </TableContent>
      </Content>
    </Container>
  );
};

export default Week;
