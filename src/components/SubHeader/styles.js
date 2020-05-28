import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background: linear-gradient(white,#eee);
  width: 100vw;
  height: 50px;
  box-shadow: 0px 1px 5px 0px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  font-size: 16px;
  background: transparent;
  border: 0px;
  cursor: pointer;
`