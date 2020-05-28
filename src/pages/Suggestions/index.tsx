import React, { useEffect, useState, useContext } from "react";
import SubHeader from "../../components/SubHeader";

import { Container, Content, ContainerInputs, Label } from "./styles";
import Suggestion from "./components/Suggestion";

import api from "../../service/api";
import ContextApp from "../../contexts/ContextApp";

function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionSchema[]>();
  const [typesShow, setTypesShow] = useState<{
    ru: boolean;
    app: boolean;
    others: boolean;
  }>({ ru: false, app: false, others: true });

  const { pass } = useContext(ContextApp);

  const handleClickType = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    switch (event.currentTarget.id) {
      case "app":
        return setTypesShow({ ru: false, others: false, app: !typesShow.app });
      case "ru":
        return setTypesShow({ others: false, app: false, ru: !typesShow.ru });
      case "others":
        return setTypesShow({
          app: false,
          ru: false,
          others: !typesShow.others,
        });
    }
  };

  const handleRemove = async (id: string) => {
    const res = await api.delete("/suggestions", {
      params: { pass, id },
      validateStatus: () => false,
    });
    if (res.status === 200) {
      const _suggestions = suggestions?.filter((item) => item._id !== id);
      setSuggestions(_suggestions);
    } else if (res.status === 400) alert(res.data.error);
  };

  const handleMark = async (id: string) => {
    const res = await api.post(
      "/toggleSuggestion",
      { pass, id },
      {
        validateStatus: () => true,
      }
    );
    if (res.status === 200) {
      const _suggestions = suggestions?.map((item) => {
        if (item._id === id) {
          item.viewed = !item.viewed;
        }
        return item;
      });
      setSuggestions(_suggestions);
    }
  };

  useEffect(() => {
    const loadSuggestions = async () => {
      const { data } = await api.get("/suggestions");
      setSuggestions(data);
    };
    loadSuggestions();
  }, []);

  return (
    <Container>
      <SubHeader />
      <ContainerInputs>
        <Label id="others" show={typesShow?.others} onClick={handleClickType}>
          Outros
        </Label>
        <Label id="ru" show={typesShow?.ru} onClick={handleClickType}>
          RU
        </Label>
        <Label id="app" show={typesShow?.app} onClick={handleClickType}>
          App
        </Label>
      </ContainerInputs>
      <Content>
        {suggestions?.map(
          (suggestion, index) =>
            Object.getOwnPropertyDescriptor(typesShow, suggestion.type)
              ?.value && (
              <Suggestion
                key={String(index + suggestion._id)}
                item={suggestion}
                remove={handleRemove}
                mark={handleMark}
              />
            )
        )}
      </Content>
    </Container>
  );
}

export default Suggestions;
