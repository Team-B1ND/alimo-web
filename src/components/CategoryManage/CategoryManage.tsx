import React, { useEffect } from "react";
import * as S from "src/components/CategoryManage/Category.style";
import SideBar from "src/components/SideBar/SideBar";
import useCategoryManage from "src/hooks/Category/useCateogyManage";
import AddStudent from "./StudentModal/AddStudent";
import StudentList from "./CategoryNameModal";
import MoreImg from "src/assets/images/category/MoreImg.svg";
import ProfileImage from "src/assets/images/common/ProfileImg.svg";
import searchImg from "src/assets/images/category/searchImg.png";
import PermissionModal from "./PermissionModal";
import useAddStudnet from "src/hooks/Category/useAddStudent";

const CategoryManage = () => {
  const { ...category } = useCategoryManage();
  const { showStudentList, handlePopUp, onClose } = useAddStudnet();

  useEffect(() => {
    category.getCategoryList();
  }, []);

  return (
    <>
      <S.Main>
        <SideBar />
        <S.CategoryMain>
          <S.CategoryManageView>
            <S.CateogyManageUtilityWrap>
              <S.SearchCateogy
                onChange={category.SearchCategoryName}
                onKeyUp={category.handleGetCategoryList}
                placeholder="카테고리 검색"
                value={category.searchKeyword}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    category.handleGetCategoryList();
                  }
                }}
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
            {category.categoryData && category.categoryData.length > 0 ? (
              category.categoryData.map((item, idx) => (
                <S.CategoryInfo
                  $isclicked={category.isClickedCategory === `${item.categoryName}` ? "true" : "false"}
                  onClick={() => category.handleCategoryClick(`${item.categoryName}`)}
                  key={idx}
                >
                  <S.CategoryName>{item.categoryName}</S.CategoryName>
                  <S.CategoryInMember>{item.memberCnt}</S.CategoryInMember>
                  <S.MoreImg src={MoreImg} onClick={() => category.handleDeletetCategory(item.categoryName)} />
                </S.CategoryInfo>
              ))
            ) : (
              <p>카테고리데이터가 존재하지 않아요.</p>
            )}
          </S.CategoryManageView>
          {category.clickedCategory && category.isClickedCategory && (
            <S.CategoryMemberWrap>
              <S.MemberManageWrap>
                <S.MemberSearch
                  placeholder="멤버 검색"
                  onChange={category.onSearchMemberName}
                  onKeyUp={category.handleGetMemberData}
                  value={category.searchMember}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      category.handleGetMemberData();
                    }
                  }}
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
                <span>이름</span>
                <span>{category.GradeName}</span>
              </S.MemberUtilityWrap>
              <S.MemberList>
                {category.memberData && category.memberData.length > 0 ? (
                  category.memberData.map((member, idx) => (
                    <S.MemberWrap key={idx}>
                      <S.Member>
                        <S.MemeberProfileImg src={member.profileImage !== null ? member.profileImage : ProfileImage} />
                        <S.MemeberName>{member.name}</S.MemeberName>
                        <span>
                          {member.name !== null && member.room !== null
                            ? `${member.grade}학년 ${member.room}반`
                            : "학부모"}
                        </span>
                        <S.MoreImg
                          src={MoreImg}
                          onClick={() => category.handleMemberId(member.id, member.permission)}
                        />
                      </S.Member>
                    </S.MemberWrap>
                  ))
                ) : (
                  <p>구성원이 존재하지 않습니다.</p>
                )}
              </S.MemberList>
              {category.viewPermission && <PermissionModal onClose={category.handleViewPermission} />}
            </S.CategoryMemberWrap>
          )}
        </S.CategoryMain>
        {category.showCategoryName ? <StudentList onClose={category.OnCategoryName} onNext={onClose} /> : <></>}
        {showStudentList && <AddStudent onClose={onClose} />}
      </S.Main>
    </>
  );
};

export default CategoryManage;
