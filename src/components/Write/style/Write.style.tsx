import styled from "styled-components";

export const WriteMain = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const WriteView = styled.div`
  width: calc(100vw - 15vw);

  display: flex;
  flex-direction: row;

  margin-top: 10vh;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteTitleInput = styled.input`
  width: calc(100vw - 45vw);
  height: calc(100vh - 93vh);

  border: none;
  border-bottom: 1px solid #aaa;

  margin-left: 2vw;
  margin-top: 2vh;

  font-family: Pretendard;
  font-weight: 600;

  font-size: 2rem;

  &::placeholder {
    font-size: 2rem;
    color: #d1d1d1;
  }

  &:focus {
    outline: none;
  }
`;

export const WriteContext = styled.textarea`
  width: calc(100vw - 45vw);
  height: calc(100vh - 40vh);

  border: none;
  border-bottom: 1px solid #aaa;
  margin-top: 2vh;
  margin-left: 2vw;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;

  vertical-align: top;

  &::placeholder {
    color: #d1d1d1;
  }

  &:focus {
    outline: none;
  }
`;

export const FileWrap = styled.div`
  width: calc(100vw - 45vw);
  height: calc(100vw - 90vw);

  margin-left: 2vw;
  padding-bottom: 1vh;

  display: flex;
  flex-direction: row;

  & > img {
    width: calc(100vw - 98vw);
    height: calc(100vw - 98vw);

    margin-top: 2vh;
    margin-right: 1vw;
  }
`;
