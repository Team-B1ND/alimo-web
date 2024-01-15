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

export const DropDownWrap = styled.div`
  position: relative;
  display: inline-block;

  width: calc(100vw - 90vw);
  height: calc(100vh - 90vh);

  margin-left: 5vw;
`;

export const DropDownContentWrap = styled.div`
  position: relative;
  border: 1px solid #ffc909;
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
