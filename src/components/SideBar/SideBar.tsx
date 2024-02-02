import React from "react";
import * as S from "src/style/SideBar.style/SideBar.style";
import SideBarCategoryManageImg from "src/img/SideBarCategoryManage.png";
import SideBarHome from "src/img/SideBarHome.svg";
import TeacherProfileDummy from "src/img/Profile-Dummy.jpg";
import SideBarProfileSetting from "src/img/SideBarSetting.svg";
const SideBar = () => {
  return (
    <S.SideBarWrap>
      <S.SideBarLogoWrap>
        <S.AlimoLogoTitle>
          ALIMO<span>.</span>
        </S.AlimoLogoTitle>
        <S.AlimoLogoAdmin>Admin</S.AlimoLogoAdmin>
      </S.SideBarLogoWrap>
      <S.SideBarMenuWrap>
        <S.SideBarCategory>
          <img src={SideBarCategoryManageImg} />
          <S.SideBarMenu>카테고리 관리</S.SideBarMenu>
        </S.SideBarCategory>
        <S.SideBarCategory>
          <img src={SideBarHome} />
          <S.SideBarMenu>내가 쓴 공지보기</S.SideBarMenu>
        </S.SideBarCategory>
      </S.SideBarMenuWrap>
      <S.SideBarProfileWrap>
        <S.SideBarTeacherProfileImg src={TeacherProfileDummy} />
        <S.SideBarTeacherName>이진주</S.SideBarTeacherName>
        <S.SideBarProfileSetting src={SideBarProfileSetting} />
      </S.SideBarProfileWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
