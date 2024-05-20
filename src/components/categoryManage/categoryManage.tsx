import React, { Suspense, useEffect } from "react";
import * as S from "src/components/categoryManage/style";
import useCategoryManage from "src/hooks/category/useCateogyManage";
import AddStudent from "src/components/categoryManage/studentModal/addStudent";
import StudentList from "src/components/categoryManage/categoryNameModal/index";
import MoreImg from "src/assets/images/category/MoreImg.svg";
import ProfileImage from "src/assets/images/common/ProfileImg.svg";
import searchImg from "src/assets/images/category/searchImg.png";
import CrownImage from "src/assets/images/category/king2.svg";
import useAddStudnet from "src/hooks/category/useAddStudent";
import Skeleton from "../skelton";

const CategoryManage = () => {
  const { ...category } = useCategoryManage();
  const { showStudentList, handlePopUp, onClose } = useAddStudnet();

  useEffect(() => {
    category.getCategoryList();
  }, []);

  return (
    <>
      <S.Main>
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
              <S.CategoryTitleInfo>카테고리명</S.CategoryTitleInfo>
              <S.CategoryTitleInfo>멤버수</S.CategoryTitleInfo>
            </S.CategoryInfoWrap>
            <S.CategoryWrap>
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
              ) : category.isLoading === true ? (
                <Skeleton height={85} />
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
                <p>권한이 있는 카테고리가 없어요.</p>
              )}
            </S.CategoryWrap>
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
                        {item.permission === "ACCESS_ADMIN" || item.permission === "ACCESS_TEACHER" ? (
                          <S.CrownImg src={CrownImage} />
                        ) : (
                          <></>
                        )}
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
                ) : category.isMemberLoading === true ? (
                  <S.MemberWrap>
                    <Skeleton height={85} />
                  </S.MemberWrap>
                ) : category.memberData && category.memberData.length > 0 ? (
                  category.memberData.map((member, idx) => (
                    <S.MemberWrap key={idx}>
                      <S.Member>
                        <S.MemberProfile>
                          {member.permission === "ACCESS_ADMIN" || member.permission === "ACCESS_TEACHER" ? (
                            <S.CrownImg src={CrownImage} />
                          ) : (
                            <></>
                          )}
                          <S.MemeberProfileImg
                            src={
                              member.profileImage !== null && member.profileImage !== ""
                                ? member.profileImage
                                : ProfileImage
                            }
                          />
                        </S.MemberProfile>
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
                  <p>카테고리에 속한 멤버가 없어요.</p>
                )}
              </S.MemberList>
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
