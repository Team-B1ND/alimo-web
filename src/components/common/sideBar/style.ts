import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 100vh;
  overflow: hidden;
`;

export const SideBarLogoWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AlimoLogoTitle = styled.h1`

  font-size: 2rem;
  font-weight: 700;
  color: #000;
  z-index: 2;

  cursor: pointer;

  & > span {
    color: var(--Main500, #fece23);
  }
`;

export const AlimoLogoAdmin = styled.h1`
  font-size: 1rem;
  margin-top: 1.2vh;
  margin-left: 0.3vw;
  z-index: 5;
  cursor: pointer;
`;

export const SideBarMenuWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: space-between;
  flex-direction: column;

  margin-top: 3vh;
`;
export const SideBarMenuFlex = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  align-self: center;
`;
export const SideBarMenuBack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--Gray100, #f4f5f9);
  z-index: 5;
`;

export const SideBarCategory = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  flex-direction: row;
  cursor: pointer;

  & > img {
    min-width: 20%;
    min-height: 20%;

  }
`;

export const SideBarMenu = styled.span<{ $isclicked: string }>`
  color: ${({ $isclicked }) => ($isclicked === "true" ? "#000" : "#aaa")};
  margin-left: 10px;
  font-size: 1rem;
  line-height: normal;
  text-align: center;
`;

export const SideBarProfileWrap = styled.div`
  width: 100%;
  height: 80px;
  border: none;
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
`;
export const SidbarClickarea = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  span{
    font-size: 1.2rem;
    margin-left: 10px;
  }
`;
export const SideBarTeacherProfileImg = styled.div`
  display: flex;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border: none;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const SideBarSetting = styled.img`
  display: flex;
  min-height: 20px;
  height: 30%;
  cursor: pointer;
`;
