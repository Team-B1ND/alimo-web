import React, { useEffect } from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import SideBar from "src/components/SideBar/SideBar";
import useCategoryManage from "src/hooks/Category/useCateogyManage";
import AddStudent from "./StudentModal/AddStudent";
import StudentList from "./CategoryNameModal";
import MoreImg from "src/assets/img/MoreImg.svg";
import ProfileImage from "src/assets/img/profileimg.png";
import searchImg from "src/assets/img/searchImg.png";
import PermissionModal from "./PermissionModal";
import useAddStudnet from "src/hooks/Category/useAddStudent";
import useMemberManage from "src/hooks/Category/useMemberManage";

const CategoryManage = () => {
  const { ...hooks } = useCategoryManage();
  const { showStudentList, handlePopUp, onClose } = useAddStudnet();
  const { handleGivePermission, handleDeleteMember } = useMemberManage();

  useEffect(() => {
    hooks.getCategoryList();
  }, []);

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
              <S.MoreImg src={MoreImg} onClick={hooks.handleDeletetCategory} />
            </S.CategoryInfo>
          ))
        ) : (
          <>카테고리데이터가 존재하지 않아요.</>
        )}
      </S.CategoryManageView>
      {hooks.isClickedCategory && (
        <S.CategoryMemberWrap>
          <S.MemberManageWrap>
            <S.MemberSearch
              placeholder="멤버 검색"
              onChange={hooks.onSearchMemberName}
              value={hooks.searchMember}
              type="search"
            />
            <S.CategorySearchButton style={{ marginTop: "10px" }} onClick={hooks.handleGetMemberData}>
              <img src={searchImg} />
            </S.CategorySearchButton>
            <S.AddMemberButton onClick={handlePopUp}>새 멤버</S.AddMemberButton>
          </S.MemberManageWrap>
          <S.MemberUtilityWrap>
            <S.MemberNameInfo>
              <span>이름</span>
            </S.MemberNameInfo>
            <S.MemberClassNumberInfo>{hooks.GradeName}</S.MemberClassNumberInfo>
          </S.MemberUtilityWrap>
          {hooks.memberData.length > 0 ? (
            hooks.memberData.map((member, idx) => (
              <S.MemberWrap key={idx}>
                <S.Member>
                  <S.MemeberProfileImg src={member.profileImage !== null ? member.profileImage : ProfileImage} />
                  <S.MemeberName>{member.name}</S.MemeberName>
                  <S.MemberClassNumber>
                    {member.name !== null && member.room !== null ? `${member.grade}학년 ${member.room}반` : "학부모"}
                  </S.MemberClassNumber>
                  <S.MoreImg src={MoreImg} onClick={() => hooks.handlePermission(member.id)} />
                </S.Member>
              </S.MemberWrap>
            ))
          ) : (
            <>아직 구성원이 null이에요</>
          )}
        </S.CategoryMemberWrap>
      )}
      {hooks.viewPermission && <PermissionModal onClose={hooks.handleViewPermission} />}
      {hooks.showCategoryName && <StudentList onClose={hooks.OnCategoryName} onNext={onClose} />}
      {showStudentList && <AddStudent onClose={onClose} />}
    </S.Main>
  );
};

export default CategoryManage;
