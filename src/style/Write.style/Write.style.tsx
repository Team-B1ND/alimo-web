import styled from "styled-components";

export const WriteWrap = styled.div`
  width: 70vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  margin-left: 3vw;
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
  height: 4vh;

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
  margin-bottom: 10%;
`;

export const ImageInputButton = styled.button`
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
