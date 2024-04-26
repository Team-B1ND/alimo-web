import styled from "styled-components";
export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const CategoryMain = styled.main`
  display: flex;
  margin-top: 10vh;
  width: 100%;
`;
export const CategoryManageView = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12px;
  margin-right: 12px;

  width: 600px;

  @media only screen and (width: 1080px) {
    width: 400px;
  }

  @media only screen and (width: 1920px) {
    width: 800px;
  }

  p {
    align-items: center;
    align-self: center;
  }
`;
export const CategorySearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 100%;

  img {
    display: flex;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const CateogyManageUtilityWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const SearchCateogy = styled.input`
  width: calc(100vw - 80vw);
  height: calc(100vh - 95vh);
  margin-left: 5px;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  padding-left: 20px;

  color: #787878;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const CreateCategoryButton = styled.button`
  min-width: 100px;
  height: calc(100vh - 95vh);

  background-color: #000;

  color: #fff;
  font-size: 1rem;

  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CategoryInfoWrap = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
  justify-content: space-between;
`;

export const CategoryNameInfo = styled.span`
  color: #aaaaaa;
`;

export const CategoryMemberInfo = styled.span`
  color: #aaaaaa;
`;

export const CategoryInfo = styled.div<{ $isclicked: string }>`
  width: 600px;

  @media only screen and (width: 1080px) {
    width: 400px;
  }

  @media only screen and (width: 1920px) {
    width: 800px;
  }

  height: 80px;

  background: ${({ $isclicked }) => ($isclicked === "true" ? "#f4f5f9" : "#fff")};
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: 1vh;
  overflow: scroll;
  cursor: pointer;

  & > img {
    margin-left: 10vw;
    cursor: pointer;
  }

  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스 */
  scrollbar-width: none;

  &:hover {
    background: #f4f5f9;
  }

  &:active {
    background: #f0eff2;
    scale: 0.97;
  }

  transition: background 0.2s ease;
  transition: scale 0.4s;
`;

export const CategoryName = styled.span`
  color: #000;

  font-size: 1.2rem;
  width: 50px;
  white-space: nowrap;
  margin-left: 1vw;
`;

export const CategoryInMember = styled.span`
  color: #000;

  font-size: 1.2rem;
  margin-left: 3vw;
`;

export const CategoryMemberWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 870px;
  @media only screen and (width: 1080px) {
    width: 450px;
  }
  @media only screen and (width: 1920px) {
    width: 900px;
  }
  height: calc(100vh - 10vh);
  overflow: hidden;
  background-color: #f4f5f9;
  position: relative;
`;

export const MemberManageWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-self: end;

  margin-top: 3vh;

  width: 600px;
`;

export const MemberSearchWrap = styled.div`
  display: flex;
`;

export const MemberSearch = styled.input`
  width: 180px;
  height: 45px;

  border: 1px solid #e6e6e6;
  border-radius: 15px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const AddMemberButton = styled.button`
  width: 80px;
  height: 50px;

  border: none;
  border-radius: 15px;

  background-color: #000;

  color: #fff;
  font-size: 1rem;

  margin-left: 2vw;
  margin-right: 3vw;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const MemberUtilityWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
  align-items: center;

  span {
    color: #aaaaaa;
    font-size: 1rem;
    width: 50px;
  }
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;

  p {
    align-items: center;
    align-content: center;
  }
`;

export const MemberWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 10px;
`;

export const MemeberProfileImg = styled.img`
  width: 30px;
  height: 30px;

  @media only srcreen and (width: 1080px) {
    width: 20px;
    height: 20px;
  }

  @media only screen and (width: 1920px) {
    width: 40px;
    height: 40px;
  }

  border-radius: 50%;
`;

export const Member = styled.div`
  width: 100%;
  height: 80px;

  border: none;
  border-top: 1px solid #e6e6e6;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

export const MemeberName = styled.span`
  font-size: 1.3rem;
  width: 200px;
`;

export const MemberClassNumber = styled.span`
  font-size: 1.3rem;
`;

export const MoreImg = styled.img`
  cursor: pointer;
  z-index: 5;
  margin-right: 1vw;
`;
