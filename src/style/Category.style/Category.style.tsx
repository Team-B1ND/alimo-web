import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ManageView = styled.div`
  width: calc(100vw - 15vw);
  height: 100vh;
  display: flex;
  flex-direction: column;

  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const CreateButton = styled.button`
  display: flex;
  width: calc(100vw - 90vw);
  height: calc(100vh - 95vh);
  gap: 10px;
  justify-content: center;
  align-items: center;

  border-radius: var(--Large, 12px);
  background: var(--Main500, #fece23);
  border: none;

  color: #000;

  /* Body */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 5vh;
  margin-left: 70vw;
`;

export const Category = styled.div`
  display: flex;

  width: calc(100vw - 30vw);
  height: calc(100vh - 85vh);

  margin-left: 7vw;
  margin-bottom: 5vh;
  padding-left: 2vw;
  border: 1px solid #d7d7d7;
  border-radius: 40px;

  background: var(--White, #fff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  align-items: center;

  & span {
    color: #000;

    /* Title */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & img {
    position: absolute;
    margin-left: 55vw;

    &.DeleteImg {
      margin-left: 65vw;
    }
  }

  &:first-of-type {
    margin-top: 5vh;
  }
`;
