import React from "react";
import * as S from "../../style/Category.style/Category.style";
import SideBar from "../SideBar/SideBar";
import DeleteModal from "../../lib/Modal/DeleteModal";
import { useNavigate } from "react-router-dom";
const CategoryManage = () => {
  const navigate = useNavigate();

  const NavigateCategoryAdd = () => {
    navigate("/category-add");
  };
  return (
    <S.Main>
      <SideBar />
      <S.ManageView>
        <S.CreateButton onClick={NavigateCategoryAdd}>카테고리 생성</S.CreateButton>
        <S.Category>
          <span>1학년</span>
          <DeleteModal></DeleteModal>
        </S.Category>
        <S.Category>
          <span>마이스터 홍보부</span>
          <DeleteModal></DeleteModal>
        </S.Category>
        <S.Category>
          <span>ALT</span>
          <DeleteModal></DeleteModal>
        </S.Category>
      </S.ManageView>
    </S.Main>
  );
};

export default CategoryManage;
