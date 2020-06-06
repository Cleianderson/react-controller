import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 100%;
  grid-template-areas:
    "s w"
    "s w";
  /* display: flex;
  flex-direction: row; */
  height: calc(100vh - 100px);
`;

export const WeekContainer = styled.div`
  grid-area: w;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyContainer = styled.div`
  grid-area: w;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const EmptyText = styled.span`
  align-self: center;
`;
