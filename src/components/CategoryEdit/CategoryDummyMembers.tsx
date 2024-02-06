import React from "react";
import * as S from "src/components/CategoryEdit/style/EditCategory.style";
import ProfileImg from "src/assets/img/53.jpeg";
const CategoryDummyMembers = () => {
  return (
    <>
      <S.CategoryMember>
        <S.CategoryMemberInfo>
          <S.CategoryMemberProfile src={ProfileImg} />
          <S.CategoryMemberName>김가영</S.CategoryMemberName>
        </S.CategoryMemberInfo>
        <S.CategoryMemberManage>
          <S.Authorization>권한 부여하기</S.Authorization>
          <S.GetExitedMember>내보내기</S.GetExitedMember>
        </S.CategoryMemberManage>
      </S.CategoryMember>
    </>
  );
};

export default CategoryDummyMembers;
