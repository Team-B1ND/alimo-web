import React, { useState } from "react";
import * as S from "../../style/Category.style/Category.style";
import SideBar from "../SideBar/SideBar";
import SettingModal from "./Modal/SettingModal";
import DeleteModal from "./Modal/DeleteModal";
const CategoryManage = () => {
  return (
    <S.Main>
      <SideBar />
      <S.ManageView>
        <S.CreateButton>카테고리 생성</S.CreateButton>
        <S.Category>
          <span>1학년</span>
          <SettingModal />
          <DeleteModal></DeleteModal>
        </S.Category>
        <S.Category>
          <span>마이스터 홍보부</span>
          <SettingModal></SettingModal>
          <DeleteModal></DeleteModal>
        </S.Category>
        <S.Category>
          <span>ALT</span>
          <SettingModal></SettingModal>
          <DeleteModal></DeleteModal>
        </S.Category>
      </S.ManageView>
    </S.Main>
  );
};

export default CategoryManage;
