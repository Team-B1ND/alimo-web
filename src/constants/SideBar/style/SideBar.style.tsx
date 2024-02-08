import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 85vw);
  height: 100vh;
  background: var(--Gray100, #f4f5f9);
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

export const SideBarCategory = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  flex-direction: row;
  cursor: pointer;
  & > img {
    width: calc(100vw - 98vw);
    height: calc(100vw - 98vw);
  }
`;

export const SideBarMenu = styled.span<{ isClicked: boolean }>`
  color: ${(props) => (props.isClicked ? "#000" : "#aaa")};
  margin-left: 10px;
  /* Label */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

export const SideBarProfileWrap = styled.div`
  width: 100%;
  height: calc(100vh - 90vh);
  border: none;
  border-top: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
`;

export const SideBarTeacherProfileImg = styled.img`
  width: calc(100vw - 97vw);
  height: calc(100vw - 97vw);

  border: none;
  border-radius: 50%;

  margin-top: 2vh;
  margin-left: 1vw;
`;

export const SideBarTeacherName = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1.2rem;

  margin-top: 3.3vh;
  margin-left: 1vw;
`;

export const SideBarSetting = styled.img`
  width: calc(100vw - 98vw);
  height: calc(100vw - 98vw);

  margin-top: 2.5vh;
  margin-left: 3vw;

  cursor: pointer;
`;
