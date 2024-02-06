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

export const MyPostNotifyWrap = styled.div`
  width: 98%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyPostNotify = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const MyNotifyTextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const MyInfoWrap = styled.div`
  width: 95%;
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

export const MyNotifyDate = styled.p`
  color: #aaaaaa;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyContentWrap = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MyContentTitleBox = styled.div`
  width: 100%;
  height: 30%;
`;

export const MyContentTitle = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MyContentBox = styled.div`
  width: 100%;
  height: 30%;
`;

export const MyContent = styled.span`
  color: var(--Main600, #787878);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MyNotifyLine = styled.div`
  width: 93%;
  height: 1px;
  background-color: #f4f5f9;
`;