import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;
  border: 1px solid #aaa;
  border-radius: 10px;
  width: 500px;
`;

export const Content = styled.div<{ viewed: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ viewed }) => (viewed ? "#f9b23366" : "")};
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #1b2d4f;
  padding: 5px 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-right: 0px;
`;

export const TSuggestion = styled.span`
  padding: 10px 15px;
  text-align: justify;
`;

export const Author = styled.span`
  display: flex;
  flex: 1;
  color: white;
  font-weight: bold;
`;

export const Type = styled.span`
  margin-right: 10px;
`;

export const TDate = styled.span``

export const Info = styled.div`
  flex-direction: row;
  display: flex;
  width:100%;
  color: white;
  font-weight: 100;
  text-transform: capitalize;
  font-size: 14px;
`;

export const Title = styled.div`
    width: 100%;
`;

export const Button = styled.button`
    border-radius: 10px;
    border: 0px;
    background: transparent;
    padding: 0px;
    width: 30px;
    height: 20px;
    margin: 5px;
    cursor: pointer;
`
