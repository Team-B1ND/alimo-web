import styled from "styled-components";

export const SideBarWrap = styled.div`
  width: calc(100vw - 85vw);
  height: 100%;

  background: var(--Gray100, #f4f5f9);

  overflow: hidden;
`;

export const SideBarLogoWrap = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  margin-top: 7vh;
`;

export const AlimoLogoTitle = styled.h1`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 700;
  color: #000;

  & > span {
    color: var(--Main500, #fece23);
  }
`;

export const AlimoLogoAdmin = styled.h1`
  font-family: Pretendard;
  font-size: 1rem;
  margin-top: 1.2vh;
  margin-left: 0.3vw;
`;

export const SideBarMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideBarCategory = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 3vh;
  margin-left: 2vw;

  & > img {
    width: calc(100vw - 98vw);
    height: calc(100vw - 98vw);
  }
`;

export const SideBarMenu = styled.span`
  color: var(--Gray500, #aaa);

  /* Label */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  margin-left: 1vw;
  margin-top: 0.5vh;
`;

export const SideBarProfileWrap = styled.div`
  width: 100%;
  height: calc(100vh - 90vh);

  margin-top: 67vh;

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

export const SideBarProfileSetting = styled.img`
  width: calc(100vw - 98vw);
  height: calc(100vw - 98vw);

  margin-top: 2.5vh;
  margin-left: 3vw;
`;
