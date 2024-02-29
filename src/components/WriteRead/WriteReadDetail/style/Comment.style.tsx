import styled from "styled-components";

export const WriteReadDetailComment = styled.div`
  width: 40%;
  height: calc(100% - 10vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MyPostCommentWrap = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const MyPostComment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
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

export const CommentContent = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const CommentDate = styled.span`
  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 15px;
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
`;

export const MyPostReplyComment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 0 40px 55px;
`;
