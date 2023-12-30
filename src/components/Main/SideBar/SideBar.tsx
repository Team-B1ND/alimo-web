import React from "react";
import * as S from "../../../style/Main.style/SideBar.style/SideBar.style";
import "../../../style/Main.style/Main.css";
import ProfileImgae from "../../../img/Profile-Dummy.jpg";
const SideBar = () => {
  return (
    <S.SideBarWrap>
      <div className="LogoWrap">
        <h1 className="Logo-Alimo">Alimo</h1>
        <h1 className="Logo-Admin">admin</h1>
      </div>
      <S.ProfileWrap>
        <img src={ProfileImgae} className="ProfileImage" />
        <span className="UserName">이진주T</span>
      </S.ProfileWrap>
      <S.CategoryWrap>
        <S.Categories>글작성</S.Categories>
        <S.Categories>카테고리 관리</S.Categories>
        <S.Categories>작성글 보기</S.Categories>
        <S.Categories>설정</S.Categories>
      </S.CategoryWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
