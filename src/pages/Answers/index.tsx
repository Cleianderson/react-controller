import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";

import SubHeader from "../../components/SubHeader";
import api from "../../service/api";

import {
  Container,
  Content,
  AnswerButton,
  Modal,
  EmptyText,
  EmptyContainer,
} from "./styles";
import CreateAnswer from "./components/CreateAnswer";
import Answer from "./components/Answer";

function Answers() {
  const [modalVisible, setModalVisible] = useState(false);
  const [answers, setAnswers] = useState<TAnswers[]>([]);

  useEffect(() => {
    const loadAnswers = async () => {
      const { data } = await api.get<TAnswers[]>("/questions");
      setAnswers(data);
    };
    loadAnswers();
  }, []);

  return (
    <Container>
      <SubHeader />
      <Content>
        {answers.length > 0 ? (
          answers.map((item, index) => (
            <Answer key={String(item._id + index)} item={item} />
          ))
        ) : (
          <EmptyContainer>
            <EmptyText>Não há nada para mostrar</EmptyText>
          </EmptyContainer>
        )}
      </Content>
      <AnswerButton onClick={() => setModalVisible(true)}>
        <MdAdd size={25} color='#fff' />
        criar resposta
      </AnswerButton>
      <Modal visible={modalVisible}>
        <CreateAnswer close={() => setModalVisible(false)} />
      </Modal>
    </Container>
  );
}

export default Answers;
