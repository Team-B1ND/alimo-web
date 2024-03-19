import styled from "styled-components";

export const MyNotificationDetailWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const MyNotificationDetailBox = styled.div`
  width: 85vw;
  height: calc(100% - 10vh);
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
`;

export const MyNotificationDetail = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ccc;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MyNotification = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const MyNotificationInfoWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const MyProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const MyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0px 0px 10px;
`;

export const MyName = styled.p`
  color: var(--Gray700, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MyNotificationDate = styled.p`
  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotificationTitleWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const MyNotificationTitle = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const MyNotificationContentWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const MyNotificationContent = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotificationImgWrap = styled.div`
  width: 100%;
  height: auto;
`;

export const MyNotificationImg = styled.img`
  max-width: 60%;
  min-width: 20%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const MyNotificationFileWrap = styled.div`
  max-width: 100%;
  width: fit-content;
  height: auto;
  border-radius: 8px;
  background: var(--Gray100, #f4f5f9);
  padding: 15px;
  margin-bottom: 35px;
`;

export const MyNotificationFile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const MyNotificationFileInfo = styled.div`
  width: calc(100% - 30px);
  height: auto;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export const MyNotificationFileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const MyNotificationFileText = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const MyNotificationFileName = styled.p`
  color: var(--Primary900, #020202);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotificationFileSize = styled.p`
  color: var(--Gray600, #787878);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2px;
`;

export const MyNotificationFileDownLoadWrap = styled.button`
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const MyNotificationFileDownLoad = styled.img`
  width: 30px;
  height: 30px;
`;

export const CommentListWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CommentListBox = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow-x: hidden;
  overflow-y: auto;
`;
