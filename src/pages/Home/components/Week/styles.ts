import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px #00000066;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

export const Header = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: #1b2d4f;
  border: 1px solid #1b2d4f;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px;
`;

export const SplitedContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const TableContent = styled.div`
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px;
`;

export const TRow = styled.tr`
  border: 0px solid #ccc;
  border-top-width: 1px;
`;

export const THead = styled.th`
  text-align: left;
`;

export const TData = styled.td`
  /* border: 1px solid #ccc; */
  font-size: 14px;
  padding: 10px 0px;
`;
