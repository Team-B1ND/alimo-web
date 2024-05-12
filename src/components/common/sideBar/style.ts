import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 10%;
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
  font-family: Pretendard;
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
  font-family: Pretendard;
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
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  align-self: center;

  margin-left: -2vw;
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
    width: 30px;
    height: 30px;

    @media only screen and (min-width: 1080px) {
      width: 40px;
      height: 40px;
    }
    @media only screen and (min-width: 1920px) {
      width: 45px;
      height: 45px;
    }
  }
`;

export const SideBarMenu = styled.span<{ $isclicked: string }>`
  color: ${({ $isclicked }) => ($isclicked === "true" ? "#000" : "#aaa")};
  margin-left: 10px;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
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

export const SideBarTeacherName = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const SideBarSetting = styled.img`
  display: flex;
  width: 20%;
  height: calc(100vw - 98vw);
  cursor: pointer;
`;
