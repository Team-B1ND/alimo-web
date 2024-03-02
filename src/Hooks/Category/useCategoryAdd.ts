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
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [grade, setGrade] = useState<string | null>();
  const [cls, setCls] = useState<string | null>();
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [memberId, setMemberId] = useState<number[]>([]);
  const [memberName, setMemberName] = useState<string[]>([]);
  const { categoryName } = useCategoryManage();

  useEffect(() => {
    getMemberList();
  }, []);

  const onClickSelectedRole = (itemName: string) => {
    setSelectedRole((prev) => (itemName === prev ? "" : prev));

    console.log(selectedRole);
  };

  const onClickSelectedGrade = (itemName: string) => {
    if (selectedRole.substring(1, 2) === "학년") {
      setSelectedRole("STUDENT");
    } else {
      setGrade((prev) => (itemName === prev ? "" : prev));
    }
  };

  const onClickSelectedCls = (itemName: string) => {
    setCls((prev) => (itemName === prev ? "" : prev));
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

  const onClickAddCategory = async () => {
    try {
      const response = await axios.post(`${CONFIG.serverUrl}category/create`, {
        memberList: memberId,
        categoryName: categoryName,
      });
      if (response.status === 200) {
        showToast("success", "카테고리 생성 성공");
      } else {
        showToast("error", "카테고리 생성 실패");
      }
    } catch (e) {
      showToast("error", "서버 통신 오류");
    }

    console.log(selectedRole);
    console.log(grade);
    console.log(cls);
  };

  const getMemberList = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}member/member-list`, {
        params: {
          pageRequest: {
            page: 4,
            size: 20,
          },
          getMemberRequest: {
            memberKind: selectedRole,
            grade: grade,
            room: cls,
          },
        },
      });
      if (response.status === 200) {
        setMemberInfo(response.data.data);
        setMemberId(memberInfo.map((id) => id.memberId));
        setMemberName(memberInfo.map((name) => name.name));
      }
    } catch (e) {
      showToast("error", "멤버 리스트 불러오기 실패");
    }
  };

  return {
    categoryName,
    selectedStudents,
    selectAccess,
    onClickSelectedRole,
    onClickSelectedGrade,
    onClickSelectedCls,
    onClickAddStudent,
    onClickAccess,
    onClickAddCategory,
  };
};

export default useCategoryAdd;
