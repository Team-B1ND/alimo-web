import { showToast } from "src/lib/Toast/Swal";
import { useState } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import useCategoryManage from "./useCateogyManage";

interface Student {
  name: string;
}

const useStudent = () => {
  const [isClicked, setIsClicked] = useState<Student[]>([]);
  const [isSelectedRole, setIsSelectedRole] = useState<string>("");
  const [grade, setGrade] = useState<number>();
  const [cls, setCls] = useState<number>();
  const { categoryName } = useCategoryManage();

  const onClickClickedStudent = async (studentName: string) => {
    const isSelected = isClicked.some((student) => student.name === studentName);

    if (isSelected) {
      setIsClicked(isClicked.filter((student) => student.name !== studentName));
    } else {
      const newStudent: Student = { name: studentName };
      setIsClicked([...isClicked, newStudent]);
    }
  };

  // const getMemberList = () => {
  //   const getMemberRequest = {
  //     memberKind:
  //   }
  //   try {
  //     const response = axios.get(`${CONFIG.serverUrl}member/member-list`,{

  //     })
  //   }
  // }

  const onClickConfirmButton = () => {
    showToast("success", "카테고리가 성공적으로 추가되었습니다,");
  };

  return {
    isClicked,
    setIsSelectedRole,
    setGrade,
    setCls,
    onClickClickedStudent,
    onClickConfirmButton,
  };
};

export default useStudent;
