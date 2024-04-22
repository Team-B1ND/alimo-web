import React, { useEffect, useState } from "react";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { MemberInfo, Student } from "@src/types/Category/Add.types";
import useCreateCategory from "./useCreateCategory";
import { showToast } from "src/libs/Toast/Swal";
import { useRecoilState, useRecoilValue } from "recoil";
import { ShowStudentList, newSelectedData } from "src/store/category/category.store";

const useAddStudnet = () => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [searchMember, setSearchMember] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [room, setRoom] = useState<string>("");
  const [showStudentList, setShowStudentList] = useRecoilState(ShowStudentList);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [addMember, setAddMember] = useState<boolean>(false);
  const SelctedCategory = useRecoilValue(newSelectedData);
  const { createCategoryName } = useCreateCategory();

  const onClickAddStudent = (studentId: number, studentName: string) => {
    if (studentId === -1) {
      setSelectedStudents(memberInfo.map((member) => ({ id: member.memberId, name: member.name })));
    } else if (selectedStudents.some((student) => student.id === studentId)) {
      setSelectedStudents(selectedStudents.filter((student) => student.id !== studentId));
    } else {
      setSelectedStudents((prev) => [...prev, { id: studentId, name: studentName }]);
    }
  };

  const onClickRemoveStudent = (studentId: number) => {
    setSelectedStudents(selectedStudents.filter((student) => student.id !== studentId));
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

  const onSearchMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMember(e.target.value);
  };

  const onClickAdd = async () => {
    if (addMember === false) {
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
    } else {
      try {
        await alimoV1Axios
          .post("/category/add-member", {
            memberList: selectedStudents.map((member) => member.id),
            categoryName: SelctedCategory,
          })
          .then(() => {
            setShowStudentList(false);
            setAddMember(false);
          });
      } catch (error) {}
    }
  };

  const handlePopUp = () => {
    setShowStudentList(!showStudentList);
    setAddMember(!addMember);
    console.log(addMember);
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
    searchMember,
    addMember,
    onClickAddStudent,
    onClickRemoveStudent,
    onLoadStudentInfo,
    onLoadMemberInfo,
    onSearchMember,
    onClickAdd,
    handlePopUp,
    onClose,
  };
};

export default useAddStudnet;
