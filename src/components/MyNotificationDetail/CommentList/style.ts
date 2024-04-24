import styled from "styled-components";

export const MyNotificationCommentWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const MyNotificationCommentBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 40px 0px 0px 5%;
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

export const CommentConnectLine = styled.div`
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
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export const CommentContentBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const CommentContent = styled.p<{ replyCommentCnt: number }>`
  max-width: 70%;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
  margin-bottom: ${(props) => (props.replyCommentCnt > 0 ? "" : "20px")};
`;

export const ReplyCommentWriteBtn = styled.button`
  color: var(--Gray500, #aaa);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  margin: 1px 0px 0px 10px;
`;

export const ReplyCommentShowBtnWrap = styled.div`
  width: auto;
  height: auto;
  margin: 5px 0px 20px 0px;
`;

export const ReplyCommentShowBtn = styled.button`
  width: auto;
  color: var(--Primary500, #fece23);
  font-size: 14px;
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
  margin-left: calc(5% + 18.5px);
`;

export const MyNotificationReplyComment = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const ReplyCommentConnectLineWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ReplyCommentRadiusConnectLine = styled.div`
  width: 20px;
  height: 20px;
  border-left: 3px solid var(--Gray300, #e6e6e6);
  border-bottom: 3px solid var(--Gray300, #e6e6e6);
  border-radius: 0px 0px 0px 10px;
`;

export const ReplyCommentConnectLine = styled.div`
  width: 20px;
  height: 100%;
  border-left: 3px solid var(--Gray300, #e6e6e6);
  position: absolute;
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
  font-size: 16px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
`;
