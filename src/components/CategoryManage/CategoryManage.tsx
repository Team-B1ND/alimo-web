import React from "react";
import * as S from "../../style/Category.style/Category.style";
import SideBar from "../SideBar/SideBar";
import SettingImg from "../../img/Category-Setting.svg";
import DeleteImg from "../../img/Category-Delete.svg";
const CategoryManage = () => {
  return (
    <S.Main>
      <SideBar />
      <S.ManageView>
        <S.CreateButton>카테고리 생성</S.CreateButton>
        <S.Category>
          <span>1학년</span>
          <img src={SettingImg} className="SettingImg" />
          <img src={DeleteImg} className="DeleteImg" />
        </S.Category>
        <S.Category>
          <span>마이스터 홍보부</span>
          <img src={SettingImg} className="SettingImg" />
          <img src={DeleteImg} className="DeleteImg" />
        </S.Category>
        <S.Category>
          <span>ALT</span>
          <img src={SettingImg} className="SettingImg" />
          <img src={DeleteImg} className="DeleteImg" />
        </S.Category>
      </S.ManageView>
    </S.Main>
  );
};

export default CategoryManage;
