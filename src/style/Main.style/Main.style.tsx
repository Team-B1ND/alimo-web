import styled from "styled-components";

export const Main =styled.div`
width:100vw;
height:100vh;
display: flex;
`
export const DateWrapper = styled.div`
margin-top: 50px;
  display: flex;
  width: 100%;
  height: 50px;
`;

export const MainView = styled.div`
width: calc(100vw - 15vw);
height: 100vh;
display: flex;
justify-content: center;
position: relative;
overflow-x: hidden;
overflow-y: scroll;
`

export const PostNotifyWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  margin-top: 30px;
`;

export const ModalPostDetail = styled.div`
  display: flex;
  flex-direction: row;
`;
export const lineLeft=styled.div`
border-bottom: 1px solid #000;
width: calc(100vw - 85vw);
height: 1px;
margin-left: 10vw;

`
export const lineRight=styled.div`
border-bottom: 1px solid #000;
width: calc(100vw - 85vw);
height: 1px;
`
