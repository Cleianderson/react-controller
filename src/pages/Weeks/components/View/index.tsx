import React from "react";

import {
  Container,
  Content,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Close,
  Title,
} from "./styles";

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
        <Title>Almoço</Title>
        <Table>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Segunda</Th>
              <Th>Terça</Th>
              <Th>Quarta</Th>
              <Th>Quinta</Th>
              <Th>Sexta</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(KEYS_VALUES).map((val) => (
              <Tr>
                <Td>{KEYS_VALUES[val]}</Td>
                {week.data.map((dayWeek) => (
                  <Td>{dayWeek.almoco[val]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Title>Jantar</Title>
        <Table>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Segunda</Th>
              <Th>Terça</Th>
              <Th>Quarta</Th>
              <Th>Quinta</Th>
              <Th>Sexta</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(KEYS_VALUES).map((val) => (
              <Tr>
                <Td>{KEYS_VALUES[val]}</Td>
                {week.data.map((dayWeek) => (
                  <Td>{dayWeek.jantar[val]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Content>
      <Close onClick={onClose}>fechar</Close>
    </Container>
  );
};

export default View;
