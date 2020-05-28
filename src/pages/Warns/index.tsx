import React, { useState, useEffect } from "react";

import SubHeader from "../../components/SubHeader";
import api from "../../service/api";

import {
  Container,
  Content,
  WarnContainer,
  WarnTitle,
  WarnContent,
  WarnButton,
  Modal,
  EmptyText,
  EmptyContainer,
} from "./styles";
import CreateWarn from "./components/CreateWarn";

function Warns() {
  const [modalVisible, setModalVisible] = useState(false);
  const [warns, setWarns] = useState<Warning[]>([]);

  useEffect(() => {
    const loadWarns = async () => {
      const { data } = await api.get("/warn");
      setWarns(data);
      console.log(data);
    };
    loadWarns();
  }, []);

  return (
    <Container>
      <SubHeader />
      <Content>
        {warns.length > 0 ? (
          warns.map((item, index) => (
            <WarnContainer key={String(item._id + index)} >
              <WarnTitle>{item.title}</WarnTitle>
              <WarnContent>{item.content}</WarnContent>
            </WarnContainer>
          ))
        ) : (
          <EmptyContainer>
            <EmptyText>Não há avisos</EmptyText>
          </EmptyContainer>
        )}
      </Content>
      <WarnButton onClick={() => setModalVisible(true)}>+</WarnButton>
      <Modal visible={modalVisible}>
        <CreateWarn close={() => setModalVisible(false)} />
      </Modal>
    </Container>
  );
}

export default Warns;
