import styled from "styled-components";

export const CommentWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--Gray300, #e6e6e6);
  padding: 20px 0px;
`;

export const Comment = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const CommentInput = styled.textarea`
  width: calc(100% - 35px);
  height: 20px;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;
  border: none;
  outline: none;
  margin-bottom: 5px;
`;

export const CommentButtonWrap = styled.button`
  width: 35px;
  height: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const CommentButton = styled.img`
  width: 70%;
  height: 70%;
`;
