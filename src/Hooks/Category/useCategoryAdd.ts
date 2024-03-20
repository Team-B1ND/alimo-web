import { useEffect, useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import useCategoryManage from "./useCateogyManage";

interface Student {
  name: string;
}

interface MemberInfo {
  memberId: number;
  name: string;
}

const useCategoryAdd = () => {
  const navigate = useNavigate();
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [role, setMemberRole] = useState<string | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [cls, setCls] = useState<number | null>(null);
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [memberId, setMemberId] = useState<number[]>([]);
  const [memberName, setMemberName] = useState<string[]>([]);
  const { createCategoryName } = useCategoryManage();

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

  const handleRole = async (role: string, grade: any, room: any) => {
    setMemberRole(role);
    setGrade(grade);
    setCls(room);
    console.log(role);
    console.log(grade);
    console.log(cls);

    try {
      const response = await axios.get(`${CONFIG.serverUrl}/member/member-list`, {
        params: {
          page: 4,
          size: 15,
          memberKind: role !== null ? role.toString() : null,
          grade: grade,
          room: cls,
        },
        headers: {
          Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAxNjc3MjcsImV4cCI6MTcxMDE2OTUyN30.35yo4lW7gOSsryvaFtKpCjIXRWq3B7eQpKhQGjKbQ9Pq_wLO9GHILvtzEvC5z-qBMB7wRSiwuopI-qwMor_gzw`,
        },
      });
      if (response.status === 200) {
        setMemberInfo(response.data.data);
        setMemberId(response.data.data.memberId);
        setMemberName(response.data.data.name);
        console.log(memberInfo);
        console.log(memberId);
        console.log(memberName);
      }
    } catch (e) {
      showToast("error", "멤버 리스트 불러오기 실패");
    }
  };

  const onClickAddCategory = async () => {
    try {
      const response = await axios.post(`${CONFIG.serverUrl}category/create`, {
        memberList: memberId,
        categoryName: createCategoryName,
      });
      if (response.status === 200) {
        showToast("success", "카테고리 생성 성공");
      } else {
        showToast("error", "카테고리 생성 실패");
      }
    } catch (e) {
      showToast("error", "서버 통신 오류");
    }
  };

  return {
    createCategoryName,
    selectedStudents,
    selectAccess,
    onClickAddStudent,
    onClickAccess,
    handleRole,
    onClickAddCategory,
  };
};

export default useCategoryAdd;
