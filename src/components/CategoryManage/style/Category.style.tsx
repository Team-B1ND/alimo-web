import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const CategoryManageView = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10vh;
`;

export const CateogyManageUtilityWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchCateogy = styled.input`
  width: calc(100vw - 80vw);
  height: calc(100vh - 95vh);

  border: 1px solid #e6e6e6;
  border-radius: 15px;

  margin-top: 3vh;
  margin-left: 3vw;

  padding-left: 2vw;

  color: #787878;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;

export const CreateCategoryButton = styled.button`
  width: calc(100vw - 93vw);
  height: calc(100vh - 95vh);

  background-color: #000;

  color: #fff;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;

  border: none;
  border-radius: 15px;

  margin-top: 3vh;
  margin-left: 2vw;
`;

export const CategoryInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
`;

export const CategoryNameInfo = styled.span`
  color: #aaaaaa;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 5vw;
`;

export const CategoryMemberInfo = styled.span`
  color: #aaaaaa;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 10vw;
`;

export const CategoryWrap = styled.div`
  width: calc(100vw - 65vw);
  height: 100%;

  border: none;
  border-right: 1px solid #e6e6e6;
`;

export const CategoryInfo = styled.div<{ isClicked: boolean }>`
  width: calc(100vw - 69vw);
  height: calc(100vh - 90vh);

  background: ${(props) => (props.isClicked ? "#f4f5f9" : "#fff")};
  border: none;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;

  margin-left: 3vw;
  margin-top: 1vh;

  & > img {
    margin-left: 10vw;
  }
`;

export const CategoryName = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 400;

  margin-left: 2vw;
`;

export const CategoryInMember = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 400;

  margin-left: 11vw;
`;

export const CategoryMemberWrap = styled.div`
  width: calc(100vw - 46vw);
  height: calc(100vh - 10vh);

  margin-top: 10vh;
`;
