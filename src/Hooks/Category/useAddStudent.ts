import { showToast } from "src/lib/Toast/Swal";
import { useState } from "react";
import useCategoryManage from "./useCateogyManage";

interface Student {
  name: string;
}

const useStudent = () => {
  const [isClicked, setIsClicked] = useState<Student[]>([]);

  const onClickClickedStudent = (studentName: string) => {
    const isSelected = isClicked.some((student) => student.name === studentName);

    if (isSelected) {
      setIsClicked(isClicked.filter((student) => student.name !== studentName));
    } else {
      const newStudent: Student = { name: studentName };
      setIsClicked([...isClicked, newStudent]);
    }
  };

  const onClickConfirmButton = () => {
    showToast("success", "카테고리가 성공적으로 추가되었습니다,");
  };

  return {
    isClicked,
    onClickClickedStudent,
    onClickConfirmButton,
  };
};

export default useStudent;
