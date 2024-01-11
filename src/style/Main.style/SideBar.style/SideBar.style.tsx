import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: calc(100vw - 85vw);
  height: 100vh;
  border-right: 1px solid #cccccc;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;

  width: calc(100vw - 88vw);
  height: calc(100vh - 92vh);

  border-radius: 20px;

  background-color: #f2f2f2;

  margin-left: calc(100vw - 99vw);
  margin-top: calc(100vh - 97vh);
`;

export const CategoryWrap = styled.div`
  height: calc(100vh - 40vh);

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

export const Categories = styled.div`
  color: #ffc909;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-bottom: calc(100vh - 90vh);
  margin-left: calc(100vw - 98vw);

  cursor: pointer;
  &:first-child {
    margin-top: calc(100vh - 85vh);
  }
`;
