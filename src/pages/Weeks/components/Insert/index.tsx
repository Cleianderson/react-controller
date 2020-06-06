import React, { useState, useRef, useContext, FormEvent } from "react";
import Smalltalk from "smalltalk";

import {
  Container,
  Content,
  Close,
  Button,
  ContainerButtons,
  Input,
  ErrorText,
  Label,
} from "./styles";

import Table from "../../../../components/Table";
import api from "../../../../service/api";
import ContextApp from "../../../../contexts/ContextApp";

const Insert: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [data, setData] = useState<WeekDay[]>([]);
  const [numWeek, setNumWeek] = useState<string>();
  const [error, setError] = useState<string>();

  const { pass } = useContext(ContextApp);
  const launchInput = useRef<HTMLInputElement>(null);
  const dinnerInput = useRef<HTMLInputElement>(null);

  const handleMount = async (e: FormEvent) => {
    e.preventDefault();
    if (!(launchInput.current?.files && dinnerInput.current?.files))
      return setError("Carregue todos os arquivos");

    const formData = new FormData();
    formData.append("files", dinnerInput.current!.files[0]);
    formData.append("files", launchInput.current!.files[0]);

    const res = await api.post("/parse", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      validateStatus: () => true,
    });
    setData(res.data);
  };

  const handleSubmit = async () => {
    if (data.length === 0) return setError("Os arquivos não foram carregados");
    if (!numWeek) return setError("Selecione uma semana");

    const res = await api.post(
      `/schedule?number_week=${numWeek}`,
      {
        pass,
        week: data,
      },
      { validateStatus: () => true }
    );

    if (res.status === 200) {
      Smalltalk.alert("Succeso", `Semana ${numWeek} criada!`).then(() => {
        setNumWeek("");
        setData([]);
        setError("");
      });
    } else {
      Smalltalk.alert("Erro", res.data.error);
    }
  };

  return (
    <Container>
      <ContainerButtons onSubmit={handleMount}>
        <Label>
          Almoço
          <Button type="file" ref={launchInput} accept=".xls, .xlsx" />
        </Label>
        <Label>
          Jantar
          <Button ref={dinnerInput} type="file" accept=".xls, .xlsx" />
        </Label>
        <Button type="submit" value="Carregar arquivos" />
        <ErrorText>{error}</ErrorText>
      </ContainerButtons>
      {data && (
        <Content>
          <Table label="Almoço" type="almoco" week={data} />
          <Table label="Jantar" type="jantar" week={data} />
        </Content>
      )}
      <ContainerButtons style={{ flexDirection: "row-reverse" }}>
        <Button type="button" onClick={handleSubmit} value="Enviar" />
        <Input
          type="number"
          placeholder="Núm. da Semana (ISO)"
          value={numWeek}
          onChange={(e) => setNumWeek(e.target.value)}
        />
      </ContainerButtons>
      <Close onClick={onClose}>fechar</Close>
    </Container>
  );
};

export default Insert;
