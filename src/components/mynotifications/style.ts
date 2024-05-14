import styled, { keyframes } from "styled-components";

// Skeleton code

const move = keyframes`
  0% {
    background-color: rgba(146, 146, 146, 0.1)
  }
  50% {
    background-color: rgba(146, 146, 146, 0.25)
  }
  100% {
    background-color: rgba(146, 146, 146, 0.1)
  }
`;

export const SkeletonWrap = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SkeletonBox = styled.div`
  width: 100%;
  height: 90%;
  border-bottom: 1px solid #f4f5f9;
`;

export const ProfileSkeleton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: ${move} 1.5s infinite ease-in-out;
`

export const MyInfoSkeleton = styled.div`
  width: 150px;
  height: 22px;
  animation: ${move} 1.5s infinite ease-in-out;
`

export const TitleSkeleton = styled.div`
  width: 180px;
  height: 15px;
  margin: 15px 0 10px;
  animation: ${move} 1.5s infinite ease-in-out;
`

export const ContentSkeleton = styled.div`
  width: 400px;
  height: 15px;
  animation: ${move} 1.5s infinite ease-in-out;
`

export const Skeleton = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

// MyNotification Code

export const MyNotification = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const MyNotificationView = styled.div`
  width: 100%;
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
  flex-direction: row;
  align-items: center;
`;

export const MyPostNotification = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #f4f5f9;
`;

export const MyNotificationBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const MyNotificationTextWrap = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MyInfoWrap = styled.div`
  width: auto;
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
  font-size: 14px;
  line-height: normal;
`;

export const MyNotificationDate = styled.p`
  color: #aaa;
  font-size: 13px;
  line-height: normal;
`;

export const MyContentBoxWrap = styled.div`
  width: auto;
  height: 70%;
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
  font-size: 18px;
  line-height: normal;
`;

export const MyContentWrap = styled.div`
  width: auto;
  height: 40%;
  overflow: hidden;
`;

export const MyContent = styled.span`
  color: var(--Main600, #787878);
  font-size: 15px;
  line-height: normal;
  white-space: pre-line;
`;

export const MyNotificationImgWrap = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MyNotificationImg = styled.img`
  max-width: 90%;
  height: 90%;
`;

export const DeleteButtonWrap = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled.img`
  width: 32px;
  height: 32px;
  transform: rotate(90deg);
  cursor: pointer;
`;
