import styled from "styled-components";

export const Container = styled.div<{ viewed: boolean }>`
  /* margin: 5px;
  width: 500px; */
  border: 1px solid #ccc;
  border-radius: 10px;
  background: ${({ viewed }) => (viewed ? "#f9b23322" : "")};
  box-shadow: 0 3px 5px 0 #00000044;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-right: 0px;
`;

export const TSuggestion = styled.span`
  padding: 10px 15px;
  text-align: justify;
  letter-spacing: 22;
`;

export const Author = styled.span`
  display: flex;
  flex: 1;
  font-weight: bold;
  color: #1b2d4f;
`;

export const Type = styled.span`
  margin-right: 10px;
`;

export const TDate = styled.span``

export const Info = styled.div`
  flex-direction: row;
  display: flex;
  width:100%;
  font-weight: 100;
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
