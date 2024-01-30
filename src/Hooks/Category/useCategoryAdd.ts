import { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config.json";
interface Student {
  name: string;
}

const useCategoryAdd = () => {
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
      const requestBody = {
        memberList: [1],
        isWrite: true,
        roleName: `${selectAccess}`,
      };
      axios
        .post(`${CONFIG.serverUrl}role/create`, requestBody, {
          headers: {
            Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6Ik1FTUJFUiIsImlhdCI6MTcwNjU5MjMzOSwiZXhwIjoxNzA2NTk0MTM5fQ.uZ-kId2ryjIPBm4JPRDFjGDHyRp_ZGe7dwr0eojwPiP-GFoOx1jvSG5TMwW6LWqU_x77KCsjYGCNVPkAC-IKZA`,
          },
        })
        .then((response) => {
          showToast("success", "카테고리가 추가되었습니다.");
          navigate("/category-manage");
          console.log(response);
        });
    } else if (!categoryName && selectedStudents.length !== 0 && selectAccess !== null) {
      showToast("error", "카테고리 이름을 입력해주세요");
      setCategoryName("");
    } else if (categoryName && selectedStudents.length <= 0 && selectAccess !== null) {
      showToast("error", "학생을 선택해주세요");
    } else if (categoryName && selectedStudents.length !== 0 && selectAccess === null) {
      showToast("error", "권한을 부여해주세요.");
    } else {
      showToast("error", "아무것도 하지않으셨습니다.");
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

export default useCategoryAdd;
