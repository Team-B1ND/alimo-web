import React, { useState } from "react";
import * as S from "../../style/Category.style/Category.style";
import SideBar from "../SideBar/SideBar";
import EditButton from "src/img/Vector.png";
import DeleteModal from "src/lib/Modal/DeleteModal";
import { useNavigate } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

const CategoryManage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "1학년" },
    { id: 2, name: "교장선생님이 알립니다." },
    { id: 3, name: "ALT" },
  ]);

  const onDeleteCategory = (categoryId: number) => {
    const newCategories = categories.filter((category) => category.id !== categoryId);
    setCategories(newCategories);
  };
  return (
    <S.Main>
      <SideBar />
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
