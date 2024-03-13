import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import MoreImg from "src/assets/img/MoreImg.svg";
import MemberProfileImg from "src/assets/img/53.jpeg";
import SideBar from "src/constants/SideBar/SideBar";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";
import AddStudent from "./AddStudent";
import { ProfileImg } from "./style/AddStudent.style";

const CategoryManage = () => {
  const {
    isClickedCategory,
    createCategoryName,
    categoryName,
    memberCnt,
    categoryData,
    name,
    grade,
    cls,
    permission,
    handleCategoryClick,
    onClickNewCategoryButton,
    showStudentList,
    handlePopUp,
    onClose,
    getMember,
    memberData,
  } = useCategoryManage();
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
        {categoryData &&
          categoryData.map((name, idx) => (
            <S.CategoryWrap key={idx}>
              <S.CategoryInfo isClicked={isClickedCategory === `${categoryName}`}>
                <S.CategoryName>{categoryName}</S.CategoryName>
                <S.CategoryInMember>{memberCnt}</S.CategoryInMember>
              </S.CategoryInfo>
            </S.CategoryWrap>
          ))}
      </S.CategoryManageView>
      <S.CategoryMemberWrap>
        <S.MemberManageWrap>
          <S.MemberSearch placeholder="멤버 검색" />
          <S.AddMemberButton onClick={handlePopUp}>새 멤버</S.AddMemberButton>
        </S.MemberManageWrap>
        <S.MemberUtilityWrap>
          <S.MemberNameInfo>이름</S.MemberNameInfo>
          <S.MemberClassNumberInfo>학번</S.MemberClassNumberInfo>
        </S.MemberUtilityWrap>
        {memberData.map((member, idx) => (
          <S.MemberWrap key={idx}>
            <S.Member>
              <S.MemeberProfileImg src={MemberProfileImg} />
              <S.MemeberName>{member.name}</S.MemeberName>
              <S.MemberClassNumber>{String(member.grade) + String(member.room)}</S.MemberClassNumber>
              <S.MoreImg src={MoreImg}></S.MoreImg>
            </S.Member>
          </S.MemberWrap>
        ))}
      </S.CategoryMemberWrap>
      {showStudentList && <AddStudent onClose={onClose} />}
    </S.Main>
  );
};

export default CategoryManage;
