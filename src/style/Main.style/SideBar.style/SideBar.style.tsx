import styled from "styled-components";

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 15vw;
  height: 100vh;
  border-right: 1px solid #cccccc;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;

  width: 12vw;
  height: 10vh;

  border-radius: 20px;

  background-color: #f2f2f2;

  margin: 0 auto;
  margin-top: 3vh;
`;

export const CategoryWrap = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

export const Categories = styled.div`
  color: #ffc909;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 10vh;
  margin-left: 2vw;
`;
