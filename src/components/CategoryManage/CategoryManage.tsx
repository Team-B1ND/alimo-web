import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import MoreImg from "src/assets/img/MoreImg.svg";
import MemberProfileImg from "src/assets/img/53.jpeg";
import SideBar from "src/constants/SideBar/SideBar";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";
import AddStudent from "./AddStudent";

const CategoryManage = () => {
  const { isClickedCategory, handleCategoryClick, onClickNewCategoryButton, showStudentList, onClose } = useCategoryManage();
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
          <S.AddMemberButton>새 멤버</S.AddMemberButton>
        </S.MemberManageWrap>
        <S.MemberUtilityWrap>
          <S.MemberNameInfo>이름</S.MemberNameInfo>
          <S.MemberClassNumberInfo>학번</S.MemberClassNumberInfo>
        </S.MemberUtilityWrap>
        <S.MemberWrap>
          {isClickedCategory === "B1ND" && (
            <>
              <S.Member>
                <S.MemeberProfileImg src={MemberProfileImg} />
                <S.MemeberName>김가영</S.MemeberName>
                <S.MemberClassNumber>1102</S.MemberClassNumber>
                <S.MoreImg src={MoreImg} />
              </S.Member>
              <S.Member>
                <S.MemeberProfileImg src={MemberProfileImg} />
                <S.MemeberName>김가영</S.MemeberName>
                <S.MemberClassNumber>1103</S.MemberClassNumber>
                <S.MoreImg src={MoreImg} />
              </S.Member>
            </>
          )}
        </S.MemberWrap>
      </S.CategoryMemberWrap>
      {showStudentList && <AddStudent onClose={onClose} />}
    </S.Main>
  );
};

export default CategoryManage;
