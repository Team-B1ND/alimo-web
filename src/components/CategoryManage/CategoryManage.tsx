import React from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import SideBar from "src/components/SideBar/SideBar";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";
import AddStudent from "./StudentModal/AddStudent";
import StudentList from "./CategoryNameModal";
import MoreImg from "src/assets/img/MoreImg.svg";
import ProfileImage from "src/assets/img/profileimg.png";
import searchImg from "src/assets/img/searchImg.png";

const CategoryManage = () => {
  const { ...hooks } = useCategoryManage();
  return (
    <S.Main>
      <SideBar />
      <S.CategoryManageView>
        <S.CateogyManageUtilityWrap>
          <S.SearchCateogy
            onChange={hooks.SearchCategoryName}
            placeholder="카테고리 검색"
            type="search"
            value={hooks.searchKeyword}
          />
          <S.CategorySearchButton onClick={hooks.handleGetCategoryList}>
            <img src={searchImg} />
          </S.CategorySearchButton>
          <S.CreateCategoryButton onClick={hooks.OnCategoryName}>
            <span> 새 카테고리</span>
          </S.CreateCategoryButton>
        </S.CateogyManageUtilityWrap>
        <S.CategoryInfoWrap>
          <S.CategoryNameInfo>카테고리명</S.CategoryNameInfo>
          <S.CategoryMemberInfo>멤버수</S.CategoryMemberInfo>
        </S.CategoryInfoWrap>

        {hooks.categoryData.length > 0 ? (
          hooks.categoryData.map((item, idx) => (
            <S.CategoryInfo
              isClicked={hooks.isClickedCategory === `${item.categoryName}`}
              onClick={() => hooks.handleCategoryClick(`${item.categoryName}`)}
              key={idx}
            >
              <S.CategoryName>{item.categoryName}</S.CategoryName>
              <S.CategoryInMember>{item.memberCnt}</S.CategoryInMember>
            </S.CategoryInfo>
          ))
        ) : (
          <>데이터가 없누</>
        )}
      </S.CategoryManageView>
      {hooks.isClickedCategory && (
        <S.CategoryMemberWrap>
          <S.MemberManageWrap>
            <S.MemberSearch
              placeholder="멤버 검색"
              onChange={hooks.getMemberInCategory}
              value={hooks.searchMember}
              type="search"
            />
            <S.AddMemberButton onClick={hooks.handlePopUp}>새 멤버</S.AddMemberButton>
          </S.MemberManageWrap>
          <S.MemberUtilityWrap>
            <S.MemberNameInfo>
              <span>이름</span>
            </S.MemberNameInfo>
            <S.MemberClassNumberInfo>{hooks.GradeName}</S.MemberClassNumberInfo>
          </S.MemberUtilityWrap>
          {hooks.memberData.length != 0 ? (
            hooks.memberData.map((member, idx) => (
              <S.MemberWrap key={idx}>
                <S.Member>
                  <S.MemeberProfileImg src={member.profileImage !== null ? member.profileImage : ProfileImage} />
                  <S.MemeberName>{member.name}</S.MemeberName>
                  <S.MemberClassNumber>
                    {member.grade !== null && member.room !== null ? `${member.grade}학년 ${member.room}반` : "학부모"}
                  </S.MemberClassNumber>
                  <S.MoreImg src={MoreImg} onClick={hooks.HandleViewPermission} />
                </S.Member>
              </S.MemberWrap>
            ))
          ) : (
            <p>아직 구성원이 null이예요</p>
          )}
        </S.CategoryMemberWrap>
      )}
      {hooks.showCategoryName && <StudentList onClose={hooks.OnCategoryName} onNext={hooks.onClose} />}
      {hooks.showStudentList && <AddStudent onClose={hooks.onClose} />}
    </S.Main>
  );
};

export default CategoryManage;
