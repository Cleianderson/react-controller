import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  overflow: auto;
`

export const Label = styled.label<{show: boolean}>`
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  width: 50px;
  transition: background 1s;
  background: ${({show}) => show ? '#add8e6' : ''};
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  margin-right: 10px;
`
