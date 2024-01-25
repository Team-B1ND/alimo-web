import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100vw - 85vw);
  height: 100vh;
  border-right: 1px solid #cccccc;
`;

export const SideBarLogoWrap = styled.div`
  display: flex;
  flex-direction: row;

  height: calc(100vh - 90vh);

  cursor: pointer;
`;

export const SideBarLogoAlimo = styled.h1`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: calc(100vw - 97vw);
  margin-top: calc(100vh - 97vh);
`;

export const SideBarLogoAdmin = styled.h1`
  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 1%;
  margin-top: calc(100vh - 95vh);
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: calc(100vw - 88vw);
  height: calc(100vh - 92vh);

  border-radius: 20px;

  background-color: #f2f2f2;

  margin-left: calc(100vw - 99vw);
  margin-top: calc(100vh - 97vh);
`;

export const ProfileImage = styled.img`
  width: calc(100vw - 97vw);
  height: calc(100vh - 95vh);
  border-radius: 100%;

  margin-left: calc(100vw - 98vw);
  margin-top: calc(100vh - 99vh);
`;

export const UserName = styled.span`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  align-items: flex-end;
  align-self: center;
  margin-left: calc(100vw - 99vw);
  margin-bottom: calc(100vh - 99vh);
`;

export const CategoryWrap = styled.div`
  height: calc(100vh - 40vh);

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

export const Categories = styled.div<{ isClicked: boolean }>`
  color: #ffc909;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: ${(props) => (props.isClicked ? 900 : 600)};
  line-height: normal;

  margin-bottom: calc(100vh - 90vh);
  margin-left: calc(100vw - 98vw);

  cursor: pointer;
  &:first-child {
    margin-top: calc(100vh - 85vh);
  }
`;
