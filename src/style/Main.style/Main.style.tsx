import styled from "styled-components";

export const Main =styled.div`
width:100vw;
height:100vh;
display: flex;
`
export const DateWrapper = styled.div`
  display: flex;

  margin-top: 10vw;
  margin-left: 3vw;
  width: 100%;
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
  flex-direction: column;

  width: calc(100vw - 65vw);
  height: calc(100vh - 50vh);

  margin-top: 5vh;
  margin-left: 25vw;
`;

export const ModalPostDetail = styled.div`
  display: flex;
  flex-direction: row;
`;
