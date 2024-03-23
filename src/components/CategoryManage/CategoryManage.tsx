import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import MoreImg from "src/assets/img/MoreImg.svg";
import SideBar from "src/components/SideBar/SideBar";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";
import useSidebar from "src/Hooks/Sidbar/useSiebar";
import AddStudent from "./StudentModal/AddStudent";
import StudentList from "./CategoryList";

const CategoryManage = () => {
  const { ...hooks } = useCategoryManage();
  const { image } = useSidebar();

  return (
    <S.Main>
      <SideBar />
      <S.CategoryManageView>
        <S.CateogyManageUtilityWrap>
          <S.SearchCateogy
            placeholder="카테고리 검색"
            onKeyDown={hooks.SearchCategory}
            type="search"
          />
          <S.CreateCategoryButton onClick={hooks.onClickNewCategoryButton}>
            새 카테고리{" "}
          </S.CreateCategoryButton>
        </S.CateogyManageUtilityWrap>
        <S.CategoryInfoWrap>
          <S.CategoryNameInfo>카테고리명</S.CategoryNameInfo>
          <S.CategoryMemberInfo>멤버수</S.CategoryMemberInfo>
        </S.CategoryInfoWrap>
        {hooks.categoryData.map((category, idx) => (
          <S.CategoryWrap key={idx}>
            <S.CategoryInfo
              isClicked={hooks.isClickedCategory === `${category.categoryName}`}
              onClick={() =>
                hooks.handleCategoryClick(`${category.categoryName}`)
              }
            >
              <S.CategoryName>{category.categoryName}</S.CategoryName>
              <S.CategoryInMember>{category.memberCnt}</S.CategoryInMember>
            </S.CategoryInfo>
          </S.CategoryWrap>
        ))}
      </S.CategoryManageView>
      {hooks.isClickedCategory && (
        <S.CategoryMemberWrap>
          <S.MemberManageWrap>
            <S.MemberSearch placeholder="멤버 검색" />
            <S.AddMemberButton onClick={hooks.handlePopUp}>
              새 멤버
            </S.AddMemberButton>
          </S.MemberManageWrap>
          <S.MemberUtilityWrap>
            <S.MemberNameInfo>이름</S.MemberNameInfo>
            <S.MemberClassNumberInfo>학번</S.MemberClassNumberInfo>
          </S.MemberUtilityWrap>
          {hooks.memberData.map((member, idx) => (
            <S.MemberWrap key={idx}>
              <S.Member>
                <S.MemeberProfileImg src={image} />
                <S.MemeberName>{member.name}</S.MemeberName>
                <S.MemberClassNumber>
                  {member.grade !== null && member.room !== null
                    ? `${member.grade}학년 ${member.room}반`
                    : "학부모"}
                </S.MemberClassNumber>
                <S.MoreImg src={MoreImg} />
              </S.Member>
            </S.MemberWrap>
          ))}
        </S.CategoryMemberWrap>
      )}
      {hooks.showCategoryName && <StudentList onClose={hooks.onClose} />}
      {hooks.showStudentList && <AddStudent onClose={hooks.onClose} />}
    </S.Main>
  );
};

export default CategoryManage;
