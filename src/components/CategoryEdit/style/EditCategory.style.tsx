import styled from "styled-components";

export const EditCategoryWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const EditCategoryView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryNameWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 7vh;
  margin-left: 3vw;
`;

export const CategoryName = styled.h1`
  color: #000;

  /* Title */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CategoryNameInput = styled.input`
  width: calc(100vw - 85vw);
  height: 1px;

  border: none;

  background: var(--Main500, #fece23);

  margin-left: 1vw;
  margin-top: 3vh;
`;

export const CategoryNameChangeButton = styled.button`
  
`

export const CategoryMemberWrap = styled.div``;

export const NavigatoinBar = styled.div`
  width: calc(100vw - 30vw);

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-left: 10vw;
  margin-top: 5vh;
`;

export const CategoryMemberSortByName = styled.span`
  color: #000;

  /* Subtitle */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MemberAddButton = styled.button`
  color: #00d1ff;

  /* Subtitle */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border: none;

  background-color: transparent;

  cursor: pointer;
`;

export const CategoryMembers = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 18vw);
  height: calc(100vh - 50vh);
  margin-left: 3vw;
  margin-top: 2vh;

  border: 1px solid #000;
  border-left: none;
  border-right: none;
`;

export const CategoryMember = styled.div`
  width: calc(100vw - 18vw);
  height: calc(100vh - 90vh);

  display: flex;
  flex-direction: row;

  margin-top: 2vh;
`;

export const CategoryMemberInfo = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;

  width: calc(100vw - 90vw);
  margin-left: 1vw;
`;

export const CategoryMemberProfile = styled.img`
  width: calc(100vw - 98vw);
  height: calc(100vw - 98vw);

  background-color: grey;
  border-radius: 50%;
`;

export const CategoryMemberName = styled.span`
  color: #000;

  /* Subtitle */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 5px;
`;

export const CategoryMemberManage = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 55vw;
`;

export const Authorization = styled.span`
  color: #000;

  /* Subtitle */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 2vw;

  cursor: pointer;
`;

export const GetExitedMember = styled.span`
  color: var(--Red500, #f90707);

  /* Subtitle */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;
