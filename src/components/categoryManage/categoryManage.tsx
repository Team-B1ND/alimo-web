import React, { useEffect } from "react";
import * as S from "src/components/categoryManage/style";
import SideBar from "src/components/sideBar/sideBar";
import useCategoryManage from "src/hooks/category/useCateogyManage";
import AddStudent from "src/components/categoryManage/studentModal/addStudent";
import StudentList from "src/components/categoryManage/categoryNameModal/index";
import MoreImg from "src/assets/images/category/MoreImg.svg";
import ProfileImage from "src/assets/images/common/ProfileImg.svg";
import searchImg from "src/assets/images/category/searchImg.png";
import PermissionModal from "src/components/categoryManage/permissionModal/index";
import useAddStudnet from "src/hooks/category/useAddStudent";

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
                onChange={(e) => category.SearchCategoryName(e.target.value)}
                onKeyUp={category.handGetCategoryList}
                placeholder="카테고리 검색"
                value={category.searchKeyword}
              />
              <S.CategorySearchButton>
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
            {category.searchKeyword.length > 1 ? (
              category.filteredCategory.map((item, idx) => (
                <S.CategoryInfo
                  $isclicked={category.isClickedCategory === item.categoryName ? "true" : "false"}
                  onClick={() => category.handleCategoryClick(item.categoryName)}
                  key={idx}
                >
                  <S.CategoryName>{item.categoryName}</S.CategoryName>
                  <S.CategoryInMember>{item.memberCnt}</S.CategoryInMember>
                  <S.MoreImg src={MoreImg} onClick={() => category.handleDeletetCategory(item.categoryName)} />
                </S.CategoryInfo>
              ))
            ) : category.categoryData && category.categoryData.length > 0 ? (
              category.categoryData.map((item, idx) => (
                <S.CategoryInfo
                  $isclicked={category.isClickedCategory === item.categoryName ? "true" : "false"}
                  onClick={() => category.handleCategoryClick(item.categoryName)}
                  key={idx}
                >
                  <S.CategoryName>{item.categoryName}</S.CategoryName>
                  <S.CategoryInMember>{item.memberCnt}</S.CategoryInMember>
                  <S.MoreImg src={MoreImg} onClick={() => category.handleDeletetCategory(item.categoryName)} />
                </S.CategoryInfo>
              ))
            ) : (
              <p>카테고리 데이터가 존재하지 않아요.</p>
            )}
          </S.CategoryManageView>
          {category.clickedCategory && category.isClickedCategory && (
            <S.CategoryMemberWrap>
              <S.MemberManageWrap>
                <S.MemberSearch
                  placeholder="멤버 검색"
                  onChange={(e) => category.onSearchMemberName(e.target.value)}
                  onKeyUp={category.handleGetMemberData}
                  value={category.searchMember}
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
                {category.searchMember.length > 1 ? (
                  category.filteredMember.map((item, idx) => (
                    <S.MemberWrap key={idx}>
                      <S.Member>
                        <S.MemeberProfileImg
                          src={
                            item.profileImage !== null && item.profileImage !== "" ? item.profileImage : ProfileImage
                          }
                        />
                        <S.MemeberName>{item.name}</S.MemeberName>
                        <span>
                          {item.name !== null && item.room !== null ? `${item.grade}학년 ${item.room}반` : "학부모"}
                        </span>
                        <S.MoreImg src={MoreImg} onClick={() => category.handleMemberId(item.id, item.permission)} />
                      </S.Member>
                    </S.MemberWrap>
                  ))
                ) : category.memberData && category.memberData.length > 0 ? (
                  category.memberData.map((member, idx) => (
                    <S.MemberWrap key={idx}>
                      <S.Member>
                        <S.MemeberProfileImg
                          src={
                            member.profileImage !== null && member.profileImage !== ""
                              ? member.profileImage
                              : ProfileImage
                          }
                        />
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
