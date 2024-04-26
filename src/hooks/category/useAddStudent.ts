import React, { useEffect, useState } from "react";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { MemberCntList, MemberInfo, Student } from "src/types/categorys/add.types";
import useCreateCategory from "./useCreateCategory";
import { showToast } from "src/libs/Toast/Swal";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { AddMember, ShowCategoryName, ShowStudentList, newSelectedData } from "src/store/category/category.store";

const useAddStudnet = () => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [searchMember, setSearchMember] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [room, setRoom] = useState<string>("");
  const [showStudentList, setShowStudentList] = useRecoilState(ShowStudentList);
  const [memberCntList, setMemberCntList] = useState<MemberCntList>();
  const [addMember, setAddMember] = useRecoilState(AddMember);
  const SelctedCategory = useRecoilValue(newSelectedData);
  const showCategoryName = useSetRecoilState(ShowCategoryName);
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

  const getMemberCntList = async () => {
    try {
      await alimoV1Axios.get("/member/cnt-list").then((res) => {
        setMemberCntList(res.data.data);
      });
    } catch (error) {
      console.log(error);
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
        setMemberInfo(res.data.data);
        setRoom(`${cls}반`);
      });
  };

  const onLoadTeacherInfo = async () => {
    await alimoV1Axios.get("/member/teacher-list?page=1&size=15").then((res) => {
      setMemberInfo(res.data.data);
      setRoom("선생님");
    });
  };

  const onLoadParentInfo = async () => {
    await alimoV1Axios.get(`/member/parent-list?page=1&size=15`).then((res) => {
      setMemberInfo(res.data.data);
      setRoom("학부모");
    });
  };

  const onSearchMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMember(e.target.value);
  };

  const filteredMemberInfo = memberInfo.filter((member) => member.name.includes(searchMember));

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
            showCategoryName(false);
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
            showCategoryName(false);
            setShowStudentList(false);
            setAddMember(false);
          });
      } catch (error) {}
    }
  };

  const handlePopUp = () => {
    setAddMember((prev) => !prev);
    setShowStudentList((prev) => !prev);
  };

  const onClose = () => {
    setShowStudentList((prev) => !prev);
    showCategoryName(false);
  };

  return {
    memberInfo,
    room,
    selectedStudents,
    memberCntList,
    showStudentList,
    searchMember,
    addMember,
    filteredMemberInfo,
    onClickAddStudent,
    onClickRemoveStudent,
    getMemberCntList,
    onLoadStudentInfo,
    onLoadTeacherInfo,
    onLoadParentInfo,
    onSearchMember,
    onClickAdd,
    handlePopUp,
    onClose,
  };
};

export default useAddStudnet;
