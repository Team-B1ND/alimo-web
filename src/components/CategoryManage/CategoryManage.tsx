import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import MoreImg from "src/assets/img/MoreImg.svg";
import SideBar from "src/constants/SideBar/SideBar";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";

const CategoryManage = () => {
  const { isClickedCategory, handleCategoryClick, onClickNewCategoryButton } = useCategoryManage();
  return (
    <S.Main>
      <SideBar />
      <S.CategoryManageView>
        <S.CateogyManageUtilityWrap>
          <S.SearchCateogy placeholder="카테고리 검색" />
          <S.CreateCategoryButton onClick={onClickNewCategoryButton}>새 카테고리 </S.CreateCategoryButton>
        </S.CateogyManageUtilityWrap>
        <S.CategoryInfoWrap>
          <S.CategoryNameInfo>카테고리명</S.CategoryNameInfo>
          <S.CategoryMemberInfo>멤버수</S.CategoryMemberInfo>
        </S.CategoryInfoWrap>
        <S.CategoryWrap>
          <S.CategoryInfo onClick={() => handleCategoryClick("B1ND")} isClicked={isClickedCategory === "B1ND"}>
            <S.CategoryName>B1ND</S.CategoryName>
            <S.CategoryInMember>42</S.CategoryInMember>
            <img src={MoreImg} />
          </S.CategoryInfo>
          <S.CategoryInfo onClick={() => handleCategoryClick("B2ND")} isClicked={isClickedCategory === "B2ND"}>
            <S.CategoryName>B1ND</S.CategoryName>
            <S.CategoryInMember>42</S.CategoryInMember>
            <img src={MoreImg} />
          </S.CategoryInfo>
          <S.CategoryInfo onClick={() => handleCategoryClick("B3ND")} isClicked={isClickedCategory === "B3ND"}>
            <S.CategoryName>B1ND</S.CategoryName>
            <S.CategoryInMember>42</S.CategoryInMember>
            <img src={MoreImg} />
          </S.CategoryInfo>
          <S.CategoryInfo onClick={() => handleCategoryClick("B4ND")} isClicked={isClickedCategory === "B4ND"}>
            <S.CategoryName>B1ND</S.CategoryName>
            <S.CategoryInMember>42</S.CategoryInMember>
            <img src={MoreImg} />
          </S.CategoryInfo>
        </S.CategoryWrap>
      </S.CategoryManageView>
      <S.CategoryMemberWrap>
        <S.MemberManageWrap>
          <S.MemberSearch placeholder="멤버 검색" />
        </S.MemberManageWrap>
      </S.CategoryMemberWrap>
    </S.Main>
  );
};

export default CategoryManage;
