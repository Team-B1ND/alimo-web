import styled from "styled-components";

export const ReplyCommentWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-left: calc(5% + 18.5px);
`;

export const ReplyComment = styled.div`
  width: 100%;
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
  width: auto;
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

export const ReplyCommentContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const ReplyCommentInput = styled.textarea`
  width: 50%;
  height: auto;
  resize: none;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--Gray500, #aaa);
  margin-bottom: 40px;
`;

export const ReplyCommentButton = styled.button`
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
