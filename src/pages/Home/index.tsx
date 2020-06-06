import React, { useState, useEffect, useCallback } from "react";

// import { Container } from './styles';

import Sidebar from "./components/Sidebar";
import Header from "../../components/Header";

import api from "../../service/api";
import {
  WeekContainer,
  Container,
  Content,
  EmptyContainer,
  EmptyText,
} from "./styles";
import Week from "./components/Week";

function Home() {
  const [week, setWeek] = useState<WeekDay[]>();

  useEffect(() => {
    const loadWeek = async () => {
      const { data } = await api.get<TWeek>("/thisweek");
      setWeek(data?.data);
    };
    loadWeek();
  }, []);

  const renderWeek = useCallback(() => {
    if (week?.length) {
      return week?.map((item, index) => <Week item={item} index={index} />);
    } else {
      return (
        <EmptyContainer>
          <EmptyText>semana não encontrada</EmptyText>
        </EmptyContainer>
      );
    }
  }, [week]);

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <WeekContainer>{renderWeek()}</WeekContainer>
      </Content>
    </Container>
  );
}

export default Home;
