import { useState } from "react";

interface Category {
  id: number;
  name: string;
}

const useCategoryManage = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "1학년" },
    { id: 2, name: "교장선생님이 알립니다." },
    { id: 3, name: "ALT" },
  ]);

  const onDeleteCategory = (categoryId: number) => {
    const newCategories = categories.filter((category) => category.id !== categoryId);
    setCategories(newCategories);
  };

  return {
    categories,
    onDeleteCategory,
  };
};

export default useCategoryManage;
