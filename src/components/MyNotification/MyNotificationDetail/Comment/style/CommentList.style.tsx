import styled from "styled-components";

export const MyNotificationDetailCommentWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end
`;

export const MyNotificationDetailComment = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MyNotificationCommentWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const MyNotificationComment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CommentInfoWrap = styled.div`
  width: 12%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.p`
  color: var(--Gray700, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const CommentContent = styled.p`
  max-width: 70%;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ReplyCommentWrite = styled.button`
  color: var(--Gray500, #aaa);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  margin: 1px 0px 0px 10px;
`;
