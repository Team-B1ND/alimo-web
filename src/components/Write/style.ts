import styled from "styled-components";

export const WriteMain = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  overflow: hidden;
`;

export const WriteView = styled.div`
  width: calc(100vw - 15vw);

  display: flex;
  flex-direction: row;

  margin-top: 10vh;
`;

export const InputWrap = styled.form`
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

  font-size: 1rem;
  font-weight: 600;

  vertical-align: top;

  resize: none;

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

export const ViewImageWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
`;

export const ViewImage = styled.img`
  width: calc(100vw - 93vw);
  height: calc(100vw - 93vw);

  margin-top: 1vh;
  margin-left: 2vw;
`;

export const ViewFileName = styled.input`
  width: calc(100vw - 80vw);
  height: calc(100vh - 95vh);
  border: none;

  font-size: 1rem;
  font-weight: 600;

  margin-top: 1.5vh;

  &:focus {
    outline: none;
  }
`;

export const FileChange = styled.input`
  display: none;
`;

export const SelectCategoryWrap = styled.div`
  width: 500px;
  height: 750px;
  min-width: 500px;
`;

export const SendCategoryWrap = styled.div`
  width: 500px;
  height: 80%;
  background-color: #f4f5f9;
  display: flex;
  flex-direction: column;
`;

export const SendCategoryTitle = styled.h1`
  font-family: Prentendard;
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 2vw;
  margin-top: 3vh;
`;

export const CategoryWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Cateogory = styled.span<{ isClicked: boolean }>`
  display: inline-flex;
  padding: 7px var(--Largee, 20px);
  justify-content: center;
  align-items: center;
  margin-left: 2vw;
  margin-top: 2vh;
  border-radius: var(--Large, 20px);
  border: ${({ isClicked }) => (isClicked ? "2px solid #FECE23" : "2px solid #fff")};
  background: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const UplaodButtonWrap = styled.div`
  width: calc(100vw - 70vw);
  height: 100px;
  display: flex;
  flex-direction: row;
`;

export const SendShowMember = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  color: #787878;
  margin-top: 4vh;
  margin-left: 2vw;
  & > span {
    color: #fece23;
  }
`;

export const UploadButton = styled.button`
  width: calc(100vw - 93vw);
  height: calc(100vh - 95vh);
  background-color: #000;
  color: #fff;

  font-weight: 400;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  margin-top: 3vh;
  margin-left: 8vw;
  cursor: pointer;
  &:disabled {
    background: #f4f5f9;
  }
`;
