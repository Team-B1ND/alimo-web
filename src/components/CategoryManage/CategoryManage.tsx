import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import SideBar from "src/constants/SideBar/SideBar";

const CategoryManage = () => {
  return (
    <S.Main>
      <SideBar />
      <S.CategoryManageView>
        <S.CateogyManageUtilityWrap>
          <S.SearchCateogy placeholder="카테고리 검색" />
          <S.CreateCategoryButton>새 카테고리 </S.CreateCategoryButton>
        </S.CateogyManageUtilityWrap>
        <S.CategoryInfoWrap>
          <S.CategoryNameInfo>카테고리명</S.CategoryNameInfo>
          <S.CategoryMemberInfo>멤버수</S.CategoryMemberInfo>
        </S.CategoryInfoWrap>
      </S.CategoryManageView>
    </S.Main>
  );
};

export default CategoryManage;
