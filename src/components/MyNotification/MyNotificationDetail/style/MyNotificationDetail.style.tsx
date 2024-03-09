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

export const MyNotificationImgWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const MyNotificationImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MyNotificationContentWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 35px;
`;

export const MyNotificationContent = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotificationEmoticonWrap = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #f4f5f9;
  margin-bottom: 40px;
`;

export const MyNotificationEmoticonBox = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EmoticonBox = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Emoticon = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 5px;
`;

export const EmoticonCnt = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
