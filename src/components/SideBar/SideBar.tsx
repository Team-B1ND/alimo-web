import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "src/style/SideBar.style/SideBar.style";
import ProfileImgae from "src/img/Profile-Dummy.jpg";
import useSideBarNavigation from "src/util/useSideBarNavigation";
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleCategoryClick, isClickCategory } = useSideBarNavigation({ location, navigate });

  return (
    <S.SideBarWrap>
      <S.SideBarLogoWrap onClick={() => navigate("/main")}>
        <S.SideBarLogoAlimo>Alimo</S.SideBarLogoAlimo>
        <S.SideBarLogoAdmin>Admin</S.SideBarLogoAdmin>
      </S.SideBarLogoWrap>
      <S.ProfileWrap>
        <S.ProfileImage src={ProfileImgae} />
        <S.UserName>이진주T</S.UserName>
      </S.ProfileWrap>
      <S.CategoryWrap>
        <S.Categories isClicked={isClickCategory === "메인"} onClick={() => handleCategoryClick("메인")}>
          메인
        </S.Categories>
        <S.Categories isClicked={isClickCategory === "글작성"} onClick={() => handleCategoryClick("글작성")}>
          글작성
        </S.Categories>
        <S.Categories
          isClicked={isClickCategory === "카테고리 관리"}
          onClick={() => handleCategoryClick("카테고리 관리")}
        >
          카테고리 관리
        </S.Categories>
        <S.Categories isClicked={isClickCategory === "작성글 보기"} onClick={() => handleCategoryClick("작성글 보기")}>
          작성글 보기
        </S.Categories>
        <S.Categories isClicked={isClickCategory === "설정"} onClick={() => handleCategoryClick("설정")}>
          설정
        </S.Categories>
      </S.CategoryWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
