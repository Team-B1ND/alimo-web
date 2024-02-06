import React from "react";
import * as S from "src/components/CategoryEdit/style/EditCategory.style";
import SideBar from "src/constants/SideBar/SideBar";
import CategoryDummyMembers from "./CategoryDummyMembers";
import ChangeCategoryNameImg from "src/assets/img/Write.svg";
import useCategoryEdit from "src/Hooks/Category/useCategoryEdit";

const EditCategory = () => {
  const { onClickInputPrompt } = useCategoryEdit();

  return (
    <S.EditCategoryWrap>
      <SideBar />
      <S.EditCategoryView>
        <S.CategoryNameWrap>
          <S.CategoryName>카테고리 이름</S.CategoryName>
          <S.CategoryNameInput type="text" />
          <img src={ChangeCategoryNameImg} onClick={onClickInputPrompt} />
        </S.CategoryNameWrap>
        <S.CategoryMemberWrap>
          <S.NavigatoinBar>
            <S.CategoryMemberSortByName>이름</S.CategoryMemberSortByName>
            <S.MemberAddButton>멤버 추가하기 +</S.MemberAddButton>
          </S.NavigatoinBar>
          <S.CategoryMembers>
            <CategoryDummyMembers />
            <CategoryDummyMembers />
          </S.CategoryMembers>
        </S.CategoryMemberWrap>
      </S.EditCategoryView>
    </S.EditCategoryWrap>
  );
};

export default EditCategory;
