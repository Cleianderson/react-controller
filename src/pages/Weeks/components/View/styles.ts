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

export const Table = styled.table`
  border-collapse: collapse;
  width: 90vw;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  border-top: 1px;
  font-size: 14px;
  text-align: center;
  height: 40px;
  * {
    padding: 5px;
  }
  &:nth-child(even) {
    background: #1b2d4f22;
  }
`;
export const Td = styled.td``;
export const Th = styled.th``;
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

export const Title = styled.span`
  text-align: center;
  color: #1b2d4f;
  font-weight: bold;
  margin-top: 20px;
  font-size: 18px;
  border: 0px solid #1b2d4f;
  border-bottom-width: 1px;
`;
