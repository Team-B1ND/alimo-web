import React, { useEffect } from "react";
import * as S from "src/components/CategoryManage/style/Category.style";
import SideBar from "src/components/SideBar/SideBar";
import useCategoryManage from "@src/hook/Category/useCateogyManage";
import AddStudent from "./StudentModal/AddStudent";
import StudentList from "./CategoryNameModal";
import MoreImg from "src/assets/img/MoreImg.svg";
import ProfileImage from "src/assets/img/profileimg.png";
import searchImg from "src/assets/img/searchImg.png";
import PermissionModal from "./PermissionModal";
import useAddStudnet from "@src/hook/Category/useAddStudent";

const CategoryManage = () => {
  const { ...category } = useCategoryManage();
  const { showStudentList, handlePopUp, onClose } = useAddStudnet();

  useEffect(() => {
    category.getCategoryList();
  }, []);

  return (
    <S.Main>
      <SideBar />
      <S.CategoryManageView>
        <S.CateogyManageUtilityWrap>
          <S.SearchCateogy
            onChange={category.SearchCategoryName}
            placeholder="카테고리 검색"
            type="search"
            value={category.searchKeyword}
          />
          <S.CategorySearchButton onClick={category.handleGetCategoryList}>
            <img src={searchImg} />
          </S.CategorySearchButton>
          <S.CreateCategoryButton onClick={category.OnCategoryName}>
            <span> 새 카테고리</span>
          </S.CreateCategoryButton>
        </S.CateogyManageUtilityWrap>
        <S.CategoryInfoWrap>
          <S.CategoryNameInfo>카테고리명</S.CategoryNameInfo>
          <S.CategoryMemberInfo>멤버수</S.CategoryMemberInfo>
        </S.CategoryInfoWrap>
        {category.categoryData.length > 0 ? (
          category.categoryData.map((item, idx) => (
            <S.CategoryInfo
              isClicked={category.isClickedCategory === `${item.categoryName}`}
              onClick={() => category.handleCategoryClick(`${item.categoryName}`)}
              key={idx}
            >
              <S.CategoryName>{item.categoryName}</S.CategoryName>
              <S.CategoryInMember>{item.memberCnt}</S.CategoryInMember>
              <S.MoreImg src={MoreImg} onClick={category.handleDeletetCategory} />
            </S.CategoryInfo>
          ))
        ) : (
          <>카테고리데이터가 존재하지 않아요.</>
        )}
      </S.CategoryManageView>
      {category.isClickedCategory && (
        <S.CategoryMemberWrap>
          <S.MemberManageWrap>
            <S.MemberSearch
              placeholder="멤버 검색"
              onChange={category.onSearchMemberName}
              value={category.searchMember}
              type="search"
            />
            <S.CategorySearchButton
              style={{ marginTop: "10px", marginLeft: "8px" }}
              onClick={category.handleGetMemberData}
            >
              <img src={searchImg} />
            </S.CategorySearchButton>
            <S.AddMemberButton onClick={handlePopUp}>새 멤버</S.AddMemberButton>
          </S.MemberManageWrap>
          <S.MemberUtilityWrap>
            <S.MemberNameInfo>
              <span>이름</span>
            </S.MemberNameInfo>
            <S.MemberClassNumberInfo>{category.GradeName}</S.MemberClassNumberInfo>
          </S.MemberUtilityWrap>
          {category.memberData.length > 0 ? (
            category.memberData.map((member, idx) => (
              <S.MemberWrap key={idx}>
                <S.Member>
                  <S.MemeberProfileImg src={member.profileImage !== null ? member.profileImage : ProfileImage} />
                  <S.MemeberName>{member.name}</S.MemeberName>
                  <S.MemberClassNumber>
                    {member.name !== null && member.room !== null ? `${member.grade}학년 ${member.room}반` : "학부모"}
                  </S.MemberClassNumber>
                  <S.MoreImg src={MoreImg} onClick={() => category.handleMemberId(member.id, member.permission)} />
                </S.Member>
              </S.MemberWrap>
            ))
          ) : (
            <>아직 구성원이 null이에요</>
          )}
        </S.CategoryMemberWrap>
      )}
      {category.viewPermission && <PermissionModal onClose={category.handleViewPermission} />}
      {category.showCategoryName && <StudentList onClose={category.OnCategoryName} onNext={onClose} />}
      {showStudentList && <AddStudent onClose={onClose} />}
    </S.Main>
  );
};

export default CategoryManage;
