import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";

interface Student {
  name: string;
}

const useCategoryEdit = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);

  const onChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const onClickAddStudent = (studentName: string) => {
    const isSelected = selectedStudents.some((student) => student.name === studentName);

    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((student) => student.name !== studentName));
    } else {
      const newStudent: Student = { name: studentName };
      setSelectedStudents([...selectedStudents, newStudent]);
    }
  };

  const onClickAccess = (access: string) => {
    setSelectAccess((prevAccess) => (access === prevAccess ? null : access));
  };

  const onClickAddCategory = () => {
    if (categoryName && selectedStudents.length !== 0 && selectAccess !== null) {
      showToast("success", "카테고리가 수정되었습니다.");
      navigate("/main");
    }
  };
  
  return {
    categoryName,
    selectedStudents,
    selectAccess,
    onChangeCategoryName,
    onClickAddStudent,
    onClickAccess,
    onClickAddCategory,
  };
};

export default useCategoryEdit;
