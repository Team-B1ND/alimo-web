import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  overflow: scroll;
`;
export const CategoryMain = styled.main`
  display: flex;
  margin-top: 10vh;
  width: 100%;
`;
export const CategoryManageView = styled.div`
  width: calc(100vw - 65vw);
  height: 100%;

  display: flex;
  flex-direction: column;

  margin-left: 12px;
  margin-right: 12px;
`;

export const CategoryWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스 */
  scrollbar-width: none;

  position: relative;

  p {
    position: absolute;

    top: 30%;
    left: 30%;
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
  height: 50px;
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
  height: 50px;

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
  width: 350px;
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
  justify-content: space-evenly;
`;

export const CategoryNameInfo = styled.span`
  color: #aaaaaa;
  margin-left: 1vw;
`;

export const CategoryMemberInfo = styled.span`
  color: #aaaaaa;
  margin-left: 11vw;
`;

export const CategoryInfo = styled.div<{ $isclicked: string }>`
  width: calc(100vw - 65vw);
  min-height: 80px;
  height: 80px;

  background: ${({ $isclicked }) => ($isclicked === "true" ? "#f4f5f9" : "#fff")};
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
`;

export const CategoryInMember = styled.span`
  color: #000;

  font-size: 1.2rem;

  width: calc(100vw - 97vw);

  margin-left: 11vw;
`;

export const CategoryMemberWrap = styled.div`
  width: 100%;
  height: calc(100vh - 10vh);
  overflow: hidden;
  background-color: #f4f5f9;
  position: relative;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;

export const MemberManageWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin-top: 3vh;
`;

export const MemberSearch = styled.input`
  width: 150px;
  height: 45px;

  border: 1px solid #e6e6e6;
  border-radius: 15px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const AddMemberButton = styled.button`
  width: calc(100vw - 95vw);
  height: calc(100vh - 95vh);

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
  justify-content: space-around;
  span {
    color: #aaaaaa;
    font-size: 1rem;
    width: 50px;
    align-items: center;
    justify-content: center;
  }
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;

  position: relative;

  p {
    position: absolute;

    top: 30%;
  }
`;

export const MemberWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 10px;

  position: relative;
`;

export const Member = styled.div`
  width: 100%;
  height: 80px;

  border: none;
  border-top: 1px solid #e6e6e6;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;

  position: relative;
`;

export const CrownImg = styled.img`
  width: 30px;
  height: 30px;

  position: absolute;
  left: 15%;
  top: 10%;
`;

export const MemeberProfileImg = styled.img`
  width: calc(100vw - 97vw);
  height: calc(100vw - 97vw);

  border-radius: 50%;
  border: 1px solid #d7d7d7;
`;

export const MemeberName = styled.span`
  font-size: 1.3rem;
  width: 200px;
`;

export const MoreImg = styled.img`
  cursor: pointer;
`;
