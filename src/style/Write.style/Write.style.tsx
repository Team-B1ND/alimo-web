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
`;

export const ImageUploadImg = styled.img`
  width: calc(100vw - 98vw);
  height: calc(100vw - 98vw);

  margin-top: 2vh;
  margin-right: 1vw;

  cursor: pointer;
`;  

export const ImageInputRef = styled.input`
  display: none;
`;

export const FileChangeLabel = styled.label`
  & > img {
    width: calc(100vw - 98vw);
    height: calc(100vw - 98vw);

    margin-top: 2vh;
    margin-right: 1vw;

    cursor: pointer;
  }
`;

export const ViewFileName = styled.input`
  width: calc(100vw - 90vw);
  height: calc(100vh - 90vh);
  border: none;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
`;

export const FileChange = styled.input`
  display: none;
`;

export const SelectCategoryWrap = styled.div`
  width: calc(100vw - 70vw);
  height: calc(100vh - 10vh);

  background: red;
`;
