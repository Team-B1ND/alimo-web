import styled from "styled-components";

export const MyNotificationDetailWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
`;

export const MyNotificationDetailBox = styled.div`
  width: 85vw;
  height: calc(100% - 10vh);
  display: flex;
  flex-direction: row;
  margin-top: 85px;
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
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Notificationclose = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 25px;
  img {
    margin-left: 50px;
    width: 25px;
    height: 25px;
  }
`;

export const MyNotification = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const MyInfoWrap = styled.div`
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

export const InfoWrap = styled.div`
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
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  word-break: break-all;
`;

export const Content = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: pre-line;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: auto;
`;

export const Img = styled.img<{
  dataCnt: number;
  imageIndex: number;
}>`
  max-width: 60%;
  min-width: 20%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: ${(props) =>
    props.dataCnt > props.imageIndex + 1 ? "3px" : "20px"};
`;

export const MyNotificationFileWrap = styled.div<{
  dataCnt: number;
  fileIndex: number;
}>`
  max-width: 100%;
  width: fit-content;
  height: auto;
  border-radius: 8px;
  background: var(--Gray100, #f4f5f9);
  padding: 15px;
  margin-bottom: ${(props) =>
    props.dataCnt > props.fileIndex + 1 ? "10px" : "35px"};
`;

export const MyNotificationFile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const FileInfoWrap = styled.div`
  width: calc(100% - 30px);
  height: auto;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export const FileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const FileInfo = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const FileName = styled.p`
  color: var(--Primary900, #020202);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FileSize = styled.p`
  color: var(--Gray600, #787878);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2px;
`;

export const FileDownLoadWrap = styled.button`
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FileDownLoad = styled.img`
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
