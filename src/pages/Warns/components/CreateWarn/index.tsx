import React, { useState, useEffect, useContext } from "react";
import moment from "moment";

import {
  Container,
  Label,
  Input,
  TextArea,
  Close,
  Content,
  Submit,
  ErrorText,
} from "./styles";

import api from "../../../../service/api";
import ContextApp from "../../../../contexts/ContextApp";

function CreateWarn({ close }: { close: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [_date, setDate] = useState("");
  const [error, setError] = useState("");

  const { pass } = useContext(ContextApp);

  const handleSubmit = async () => {
    if (title.trim().length === 0) return setError("Insira um título");
    if (content.trim().length === 0) return setError("Insira a mensagem");
    if (_date.trim().length === 0)
      return setError("Insira uma data de expiração");

    const res = await api.post(
      "/warn",
      { title, content, endDate: moment(_date).toISOString(), pass },
      { validateStatus: () => false }
    );
    if (res.status === 200) {
      setTitle("");
      setContent("");
      setDate("");
    }
    alert(res.status === 200 ? "Aviso enviado" : res.data.error);
  };

  useEffect(() => {
    if (error.trim().length === 0) return;
    setError("");
  }, [title, content, _date]);

  return (
    <Container>
      <Content>
        <ErrorText>{error}</ErrorText>
        <Label>Título</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>Mensagem</Label>
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Label>Válido até</Label>
        <Input
          type="date"
          value={_date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Submit onClick={handleSubmit}>Enviar</Submit>
        <Close onClick={close}>X fechar</Close>
      </Content>
    </Container>
  );
}

export default CreateWarn;
