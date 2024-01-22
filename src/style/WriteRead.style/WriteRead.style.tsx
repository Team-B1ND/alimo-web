import styled from "styled-components";

export const WriteRead = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const WriteReadView = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

export const WriteReadWrap = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10vh;
`;

export const WriteReadText = styled.div`
  width: 90%;
  height: auto;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const WriteReadTitle = styled.span`
  color: #000;
  padding-right: 10px;
  margin-bottom: 50px;
`;

export const WriteReadCount = styled.span`
  color: var(--Main500, #fece23);
`;

export const MyPostNotifyWrap = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyPostNotify = styled.div`
  width: 100%;
  height: 90%;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
`;

export const MyNotifyTextWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyInfoWrap = styled.div`
  width: 95%;
  height: 35%;
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

export const MyNotifyDate = styled.p`
  color: var(--Gray500, #888);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyContentWrap = styled.div`
  width: 95%;
  height: 65%;
  display: flex;
  flex-direction: column;
`;

export const MyContentTitleBox = styled.div`
  width: 100%;
  height: 30%;
`;

export const MyContentTitle = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const MyContentBox = styled.div`
  width: 100%;
  height: 70%;
`;

export const MyContent = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotifyImgWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const MyNotifyImg = styled.img`
  width: 80%;
  height: 80%;
`;
