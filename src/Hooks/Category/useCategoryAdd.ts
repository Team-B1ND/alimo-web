import { useEffect, useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import CONFIG from "src/config/config.json";
import useCategoryManage from "./Manage";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";

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
  const { createCategoryName, setShowStudentList } = useCategoryManage();

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
    alert(createCategoryName);
    setMemberRole(role);
    setGrade(grade);
    setCls(room);
    console.log(role);
    console.log(grade);
    console.log(cls);

    try {
      const response = await alimoV1Axios.get(`${CONFIG.serverUrl}/member/member-list`, {
        params: {
          page: 4,
          size: 15,
          memberKind: role !== null ? role.toString() : null,
          grade: grade,
          room: cls,
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
      const response = await alimoV1Axios.post(`${CONFIG.serverUrl}/category/create`, {
        memberList: memberId,
        categoryName: createCategoryName,
      });
      if (response.status === 200) {
        showToast("success", "카테고리 생성 성공");
        setShowStudentList(false);
      } else {
        showToast("error", "카테고리 생성 실패");
        setShowStudentList(false);
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
