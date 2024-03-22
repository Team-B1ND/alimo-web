import styled from "styled-components";

export const MyNotificationDetailComment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const MyNotificationCommentWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 40px 0px 0px 8%;
`;

export const MyNotificationComment = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const CommentInfoWrap = styled.div`
  width: auto;
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

export const CommentLine = styled.div`
  width: 3px;
  height: calc(100% - 40px);
  background-color: var(--Gray300, #e6e6e6);
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
  width: auto;
  height: auto;
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

export const ReplyCommentShowWrap = styled.div`
  width: auto;
  height: auto;
  margin: 5px 0px 20px 0px;
`;

export const ReplyCommentShow = styled.button`
  width: auto;
  color: var(--Primary500, #fece23);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const MyNotificationReplyCommentWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: calc(8% + 18.5px);
`;

export const MyNotificationReplyComment = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const ReplyCommentLineWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ReplyCommentRadiusLine = styled.div`
  width: 20px;
  height: 20px;
  border-left: 3px solid var(--Gray300, #e6e6e6);
  border-bottom: 3px solid var(--Gray300, #e6e6e6);
  border-radius: 0px 0px 0px 10px;
`;

export const ReplyCommentLine = styled.div`
  width: 20px;
  height: calc(100% - 20px);
  border-left: 3px solid var(--Gray300, #e6e6e6);
`;

export const ReplyCommentInfoWrap = styled.div`
  width: 12%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export const ReplyCommentProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ReplyCommentContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ReplyCommentName = styled.p`
  color: var(--Gray700, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ReplyCommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0px 40px 0px;
`;

export const ReplyCommentContent = styled.p`
  max-width: 70%;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
