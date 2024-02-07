import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import SideBar from "src/constants/SideBar/SideBar";
import useCategory from "src/Hooks/Category/useCateogyManage";

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
        <S.CategoryInfo>
          <S.CategoryName>B1ND</S.CategoryName>
          <S.CategoryInMember>42</S.CategoryInMember>
        </S.CategoryInfo>
        <S.CategoryInfo>
          <S.CategoryName>B1ND</S.CategoryName>
          <S.CategoryInMember>42</S.CategoryInMember>
        </S.CategoryInfo>
        <S.CategoryInfo>
          <S.CategoryName>B1ND</S.CategoryName>
          <S.CategoryInMember>42</S.CategoryInMember>
        </S.CategoryInfo>
        <S.CategoryInfo>
          <S.CategoryName>B1ND</S.CategoryName>
          <S.CategoryInMember>42</S.CategoryInMember>
        </S.CategoryInfo>
      </S.CategoryManageView>
    </S.Main>
  );
};

export default CategoryManage;
