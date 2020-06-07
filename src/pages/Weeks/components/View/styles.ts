import styled from "styled-components";

export const Container = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 #00000066;
  margin: 10px;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 50px);
  border-radius: 10px;
  padding: 10px 15px;
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #a00;
  color: white;
  font-weight: bold;
  border: 1px solid #a00;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;
