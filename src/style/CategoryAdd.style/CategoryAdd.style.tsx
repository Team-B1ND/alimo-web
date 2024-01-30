import styled from "styled-components";

export const CategoryAdd = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const CategoryAddView = styled.div`
  width: 70vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const CategoryNameWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 3vw;

  margin-top: 15vh;
`;

export const H1 = styled.h1`
  color: #000;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 10vh;
`;

export const CategoryNameInput = styled.input`
  width: calc(100vw - 70vw);
  height: calc(100vh - 95vh);

  border: none;
  border-bottom: 1px solid var(--Main400, #f8cf41);
  background: var(--Main50, #fffefc);
  outline: none;

  padding-left: 1vw;

  margin-left: 3vw;
  /* margin-top: 13vh; */

  color: #000;
  font-family: Pretendard;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const SelectMemberWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 3vw;
`;

export const DropDownContentWrap = styled.div`
  border: 1px solid #ffc909;

  width: calc(100vw - 90vw);
  height: calc(100vh - 75vh);

  margin-left: 5vw;

  border-collapse: collapse;
`;

export const DropDownContent = styled.div`
  width: calc(100vw - 90vw);
  height: calc(100vh - 95vh);

  display: flex;

  border: none;
  border-bottom: 1px solid #ffc909;

  padding-left: 1vw;

  align-items: center;

  font-family: Pretendard;
  font-weight: 600;
  font-size: 1rem;

  cursor: pointer;

  &.changeBG {
    background-color: #fbe69e;
  }
`;

export const GrantAccessWrap = styled.div`
  margin-left: 3vw;

  margin-top: 10vh;

  display: grid;
`;

export const AccessWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GrantAccess = styled.span`
  display: inline-flex;
  padding: 10px var(--Largee, 20px);
  justify-content: center;
  align-items: center;

  margin-right: 3vw;

  border-radius: var(--Large, 20px);
  background: var(--Main500, #ffd917);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &.selected {
    background: #FFC909;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 15vh;

  align-items: center;
  align-self: center;
`;

export const StyledButton = styled.button`
  display: flex;

  width: 8vw;
  height: 5vh;

  padding: var(--Large, 12px);
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

  margin-right: 2vw;

  cursor: pointer;

  &.cancle {
    background: var(--Red200, #ffe8e8);

    color: var(--Red500, #f90707);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 5vw;
  }
`;
