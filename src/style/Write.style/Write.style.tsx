import styled from "styled-components";

export const WriteMain = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const MainView = styled.div`
  width: calc(100vw - 15vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const WriteWrap = styled.div`
  width: 70vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

export const ContentWrap = styled.div``;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleInput = styled.input`
  width: calc(100vw - 80vw);
  border: none;
  border-bottom: 1px solid var(--Main400, #f8cf41);

  margin-left: 3vw;

  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`;

export const InputContent = styled.input`
  width: calc(100vw - 31vw);
  height: calc(100vh - 87vh);

  border-radius: 20px;
  border: 1px solid var(--Main400, #f8cf41);
  background: var(--Main50, #fffefc);
  outline: none;

  padding-left: 1vw;

  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
`;

export const H1 = styled.h1`
  color: #000;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CatetoryWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled.button`
  display: flex;

  width: 8vw;
  height: 5vh;

  padding: var(--Large, 12px);
  margin-bottom: -5vh;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: var(--Large, 12px);
  background: var(--Main500, #ffd917);
  border: none;

  color: #000;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;

  &.cancle {
    background: var(--Red200, #ffe8e8);

    color: var(--Red500, #f90707);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ImageInputWrap = styled.div`
  position: relative;
  margin-bottom: 3vh;
`;

export const ImageInputButton = styled.button`
  display: flex;
  width: calc(100vw - 90vw);
  height: calc(100vh - 95vh);
  padding: var(--Large, 12px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  cursor: pointer;

  color: #000;

  /* Caption */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border: none;
  border-radius: var(--Large, 12px);
  background: var(--Main500, #fece23);
`;

export const FileInput = styled.input`
  display: flex;
  width: calc(100vw - 94vw);
  height: calc(100vh - 95vh);
  padding: var(--Large, 12px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  cursor: pointer;

  color: #000;

  /* Caption */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border: none;
  border-radius: var(--Large, 12px);
  background: var(--Main500, #fece23);
`;

export const FileSelectWrap = styled.div`
  display: flex;
`;

export const InputFileButton = styled.label`
  display: flex;
  width: calc(100vw - 94vw);
  height: calc(100vh - 95vh);
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  margin-bottom: 1vh;
  margin-right: 10px;
  cursor: pointer;

  color: #000;

  /* Caption */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border: none;
  border-radius: var(--Large, 12px);
  background: var(--Main500, #fece23);
`;

export const UploadFileName = styled.input`
  display: inline-block;
  height: calc(100vh - 95vh);
  width: 17%;
  padding: 0 15px;
  border: 1px solid #ffd917;
  border-radius: 12px;
  outline: none;

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ViewImageWrap = styled.div`
  width: calc(100vw - 90vw);
  height: calc(100vh - 90vh);

  display: flex;
  flex-direction: column;
`;

export const ViewImage = styled.img`
  margin-top: 1vh;
  margin-bottom: 1vh;
  height: 20vh;
`;

export const CancleButton = styled.button`
  cursor: pointer;
  margin-top: 5px;

  display: flex;
  width: calc(100vw - 91vw);
  height: calc(100vh - 95vh);
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  padding: var(--Large, 12px);

  flex-shrink: 0;

  background: var(--Red200, #ffe8e8);
  border: none;
  border-radius: 10px;
  color: var(--Red500, #f90707);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const CategorySelectWrap = styled.div``;

export const Category = styled.span`
  &.SelectCategory {
    cursor: pointer;
    display: inline-flex;
    padding: 10px var(--Largee, 20px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-right: 3vw;
    margin-top: 1vh;
    border-radius: var(--Large, 20px);
    background: #ffc061;
    -webkit-tap-highlight-color: transparent;
  }
  &.Category {
    display: inline-flex;
    padding: 10px var(--Largee, 20px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-right: 3vw;
    margin-top: 1vh;
    border-radius: var(--Large, 20px);
    background: var(--Main500, #ffd917);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;
