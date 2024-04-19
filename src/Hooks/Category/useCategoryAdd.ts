import { useEffect, useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import CONFIG from "src/config/config.json";
import useCategoryManage from "./useCateogyManage";
import { alimoV1Axios } from "src/lib/Axios/customAxios";
import { Student, MemberInfo } from "src/types/Category/Add.types";

const useCategoryAdd = () => {
  const navigate = useNavigate();
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [role, setMemberRole] = useState<string | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [cls, setCls] = useState<number | null>(null);
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [memberImage, setMemberImage] = useState<string>();
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

  const onClickAddCategory = async () => {
    try {
      await alimoV1Axios
        .post(`${CONFIG.serverUrl}/category/create`, {
          memberList: memberInfo.map((member) => member.memberId).toString(),
          categoryName: createCategoryName,
        })
        .then(() => {
          setShowStudentList(false);
        });
    } catch (e) {
      showToast("error", "서버 통신 오류");
    }
  };

  const OnLoadStudentInfo = async (grade: number, cls: number) => {
    await alimoV1Axios
      .get(`/member/student-list`, {
        params: {
          page: 1,
          size: 15,
          grade: grade,
          room: cls,
        },
      })
      .then((res) => {
        setMemberInfo(res.data.data.memberList);
      });
  };

  const OnLoadMemberInfo = async (role: string) => {
    await alimoV1Axios
      .get(`member/${role}-list`, {
        params: {
          page: 1,
          size: 1,
        },
      })
      .then((res) => {
        setMemberInfo(res.data.data);
      });
  };

  return {
    createCategoryName,
    selectedStudents,
    selectAccess,
    memberInfo,
    memberCnt,
    memberImage,
    onClickAddStudent,
    onClickAccess,
    onClickAddCategory,
    OnLoadStudentInfo,
    OnLoadMemberInfo,
  };
};

export default useCategoryAdd;
