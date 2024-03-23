import styled, { keyframes } from "styled-components";


export const NullSkelton = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const MyNotification = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const MyNotificationView = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const MyNotificationWrap = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MyPostNotificationWrap = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyPostNotification = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  /* animation: ${""} 1s infinite ease-in-out; */
`;

export const MyNotificationBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;

export const MyNotificationTextWrap = styled.div`
  width: 60%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const MyInfoWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MyProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const MyInfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const MyName = styled.p`
  color: var(--Gray700, #333);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MyNotificationDate = styled.p`
  color: #aaaaaa;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyContentBoxWrap = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const MyContentTitleWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0px;
`;

export const MyContentTitle = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MyContentWrap = styled.div`
  width: 100%;
  height: auto;
`;

export const MyContent = styled.span`
  color: var(--Main600, #787878);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotificationImgWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MyNotificationImg = styled.img`
  max-width: 90%;
  height: 90%;
`;

export const MyNotificationLine = styled.div`
  width: 98%;
  height: 1px;
  background-color: #f4f5f9;
`;
