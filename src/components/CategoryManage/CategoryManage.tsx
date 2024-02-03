import React from "react";
import * as S from "../../style/Category.style/Category.style";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import EditButton from "src/img/Vector.png";
import DeleteModal from "src/lib/Modal/DeleteModal";
import { useNavigate } from "react-router-dom";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";

const CategoryManage = () => {
  const navigate = useNavigate();
  const { categories, onDeleteCategory } = useCategoryManage();

  return (
    <S.Main>
      <SideBar />
      <Header />
      <S.ManageView>
        <S.CreateButton onClick={() => navigate("/category-add")}>카테고리 생성</S.CreateButton>
        {categories.map((category) => (
          <S.Category key={category.id}>
            <span>{category.name}</span>
            <S.EditCategoryButton src={EditButton} onClick={() => navigate("/category-edit")} />
            <DeleteModal onDeleteCategory={() => onDeleteCategory(category.id)} />
          </S.Category>
        ))}
      </S.ManageView>
    </S.Main>
  );
};

export default CategoryManage;
