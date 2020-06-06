import styled from "styled-components";

export const Container = styled.div`
  grid-area: s;
  min-width: 200px;
  width: 200px;
  background: #1b2d4f;
  height: calc(100vh - 50px);
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 15px;
  border: 1px solid #1b2d4f;
  background: #1b2d4f;
  color: white;
  font-weight: bold;
  transition: border .5s;

  &:hover {
    background: #1b2d4f;
    color: #f9b233;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-color: #f9b233;
    border-bottom-color: #f9b233;
  }
`;
