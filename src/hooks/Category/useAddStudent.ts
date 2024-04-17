import React, { useState } from "react";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { MemberInfo, Student } from "src/types/Category/Add.types";
import useCreateCategory from "./useCreateCategory";
import { showToast } from "src/libs/Toast/Swal";
import { useRecoilState } from "recoil";
import { ShowStudentList } from "src/store/category/category.store";

const useAddStudnet = () => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [room, setRoom] = useState<string>("");
  const [showStudentList, setShowStudentList] = useRecoilState(ShowStudentList);
  const [memberCnt, setMemberCnt] = useState<number>();
  const { createCategoryName } = useCreateCategory();

  const onClickAddStudent = (studentId: number) => {
    setSelectedStudents((prev) => [...prev, { id: studentId }]);
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
        memberInfo.map((member) => {
          setMemberCnt(member.cnt);
        });
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

  const onClickAddCategory = async () => {
    try {
      await alimoV1Axios
        .post("/category/create", {
          memberList: selectedStudents.map((member) => member.id),
          categoryName: createCategoryName,
        })
        .then(() => {
          setShowStudentList(false);
        });
    } catch (e) {
      showToast("error", "서버 통신 오류");
    }
  };

  const handlePopUp = () => {
    setShowStudentList(!showStudentList);
  };

  const onClose = () => {
    setShowStudentList((prev) => !prev);
  };

  return {
    memberInfo,
    room,
    memberCnt,
    selectedStudents,
    showStudentList,
    onClickAddStudent,
    onLoadStudentInfo,
    onLoadMemberInfo,
    onClickAddCategory,
    handlePopUp,
    onClose,
  };
};

export default useAddStudnet;
