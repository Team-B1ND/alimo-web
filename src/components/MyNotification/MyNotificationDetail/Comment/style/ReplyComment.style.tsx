import styled from "styled-components";

export const MyPostReplyComment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 0 40px 120px;
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
  align-items: flex-end;
  margin-top: 5px;
`;

export const ReplyCommentInput = styled.textarea`
  width: 45%;
  resize: none;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  outline: none;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--Gray500, #aaa);
`;

export const ReplyCommentSubmit = styled.button`
  width: 45px;
  height: 30px;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 0;
  border-radius: 6px;
  background-color: var(--Main500, #fece23);
  cursor: pointer;
  margin-left: 10px;
`;
