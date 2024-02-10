import React from "react";
import * as S from "src/constants/SideBar/style/SideBar.style";
import ClickSideBarCategoryManageImg from "src/assets/img/ClickSideBarCateogryManage.svg";
import SideBarCategoryManageImg from "src/assets/img/SideBarCategoryManage.png";
import ClickSideBarWriteReadImg from "src/assets/img/ClickSideBarHome.svg";
import SideBarWriteReadImg from "src/assets/img/SideBarHome.svg";
import TeacherProfileDummy from "src/assets/img/Profile-Dummy.jpg";
import SideBarProfileSetting from "src/assets/img/SideBarSetting.svg";
import useSideBarNavigation from "src/util/useSideBarNavigation";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleCategoryClick, isClickCategory } = useSideBarNavigation({ location, navigate });
  return (
    <S.SideBarWrap>
      <Header />
      <S.SideBarLogoWrap>
        <S.AlimoLogoTitle>
          ALIMO<span>.</span>
        </S.AlimoLogoTitle>
        <S.AlimoLogoAdmin>Admin</S.AlimoLogoAdmin>
      </S.SideBarLogoWrap>
      <S.SideBarMenuWrap>
        <S.SideBarMenuFlex>
          <S.SideBarCategory>
            <img src={isClickCategory === "카테고리 관리" ? ClickSideBarCategoryManageImg : SideBarCategoryManageImg} />
            <S.SideBarMenu
              isClicked={isClickCategory === "카테고리 관리"}
              onClick={() => handleCategoryClick("카테고리 관리")}
            >
              카테고리 관리
            </S.SideBarMenu>
          </S.SideBarCategory>
          <S.SideBarCategory>
            <img src={isClickCategory === "내가 쓴 공지보기" ? ClickSideBarWriteReadImg : SideBarWriteReadImg} />
            <S.SideBarMenu
              isClicked={isClickCategory === "내가 쓴 공지보기"}
              onClick={() => handleCategoryClick("내가 쓴 공지보기")}
            >
              내가 쓴 공지보기
            </S.SideBarMenu>
          </S.SideBarCategory>
        </S.SideBarMenuFlex>
        <S.SideBarProfileWrap>
          <S.SideBarTeacherProfileImg src={TeacherProfileDummy} />
          <S.SideBarTeacherName>이진주</S.SideBarTeacherName>
          <S.SideBarSetting src={SideBarProfileSetting} />
        </S.SideBarProfileWrap>
      </S.SideBarMenuWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
