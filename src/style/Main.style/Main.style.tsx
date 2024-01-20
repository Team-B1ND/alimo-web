import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const DateWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: 50px;
`;

export const MainWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PostDateTime = styled.span`
  width: calc(100vw - 80vw);
  text-align: center;
`;

export const MainView = styled.div`
  width: calc(100vw - 15vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const PostNotifyWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  margin-top: 30px;
`;

export const NotifyInfo = styled.div`
  margin-top: 1vw;
  display: flex;
  flex-direction: row;
`;

export const TeacherProfile = styled.img`
  height: calc(100vw - 97vw);
  width: calc(100vw - 97vw);
  border: none;
  border-radius: 100%;
  margin-left: 1vw;
`;

export const TeacherName = styled.h1`
  color: var(--Gray700, #333);
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 1vw;
`;

export const NotifyContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  height: 83vh;
  width: calc(100vw - 45vw);
`;

export const Content = styled.span`
  margin-left: 5vw;
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const More = styled.span`
  margin-left: 5vw;
  margin-top: 1vh;

  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PostImage = styled.img`
  width: calc(100vw - 70vw);
  margin-left: 5vw;
  margin-top: 1vh;
`;

export const CloseModalIcon = styled.span`
  margin-left: 92vw;
  color: #000;
`;

export const ModalPostDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailNotifyContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  height: 83vh;
  width: calc(100vw - 45vw);
  border-right: 1px solid #d7d7d7;
`;

export const DetailPostImage = styled.img`
  width: calc(100vw - 60vw);
  margin-left: 10vw;
  margin-top: 1vh;
`;

export const DetailNotifyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeacherInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailTeacherProfile = styled.img`
  height: calc(100vw - 97vw);
  width: calc(100vw - 97vw);
  border: none;
  border-radius: 100%;

  margin-left: 11vw;
`;

export const DetailContent = styled.span`
  margin-left: 11vw;
  margin-top: 1vw;
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DetailMore = styled.span`
  margin-left: 11vw;
  margin-top: 1vh;

  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const lineLeft = styled.div`
  border-bottom: 1px solid #000;
  width: calc(100vw - 85vw);
  height: 1px;
  margin-left: 10vw;
`;
export const lineRight = styled.div`
  border-bottom: 1px solid #000;
  width: calc(100vw - 85vw);
  height: 1px;
`;
