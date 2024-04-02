import { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import CONFIG from "src/config/config.json";
import useCategoryManage from "./useCateogyManage";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";
import { Student, MemberInfo } from "src/types/Category/Add.types";

const useCategoryAdd = () => {
  const navigate = useNavigate();
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [createCategoryName, setCreateCategoryName] = useState<string>();
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [memberImage, setMemberImage] = useState<string>();
  const [room, setRoom] = useState<string>("");
  const { setShowStudentList } = useCategoryManage();

  const handleCreateCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryName(e.target.value);
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
    console.log(createCategoryName);
    try {
      await alimoV1Axios
        .post("/category/create", {
          memberList: memberInfo.map((member) => member.memberId),
          categoryName: createCategoryName,
        })
        .then(() => {
          setShowStudentList(false);
        });
    } catch (e) {
      showToast("error", "서버 통신 오류");
    }
  };

  const onLoadStudentInfo = async (grade: number, cls: number) => {
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
        setRoom(`${cls}반`);
      });
  };

  const onLoadMemberInfo = async (role: string) => {
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
    room,
    memberImage,
    handleCreateCategoryName,
    onClickAddStudent,
    onClickAccess,
    onClickAddCategory,
    onLoadStudentInfo,
    onLoadMemberInfo,
  };
};

export default useCategoryAdd;
