import React, { useCallback, useEffect, useState } from "react";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { MemberList } from "src/types/categorys/memberList.interface";
import { MemberCntList, MemberInfo, Student } from "src/types/categorys/add.types";
import useCreateCategory from "./useCreateCategory";
import { showToast } from "src/libs/toast/swal";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AddMember,
  CategoryDataAtom,
  MemberData,
  ShowCategoryName,
  ShowStudentList,
  newSelectedData,
} from "src/store/category/category.store";
import convertStudentInfo from "src/utils/convert/convertStudentInfo";

const useAddStudnet = () => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [searchMember, setSearchMember] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [isAllSelectedStudents, setIsAllSelectedStudents] = useState(false);
  const [grade, setGrade] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [showStudentList, setShowStudentList] = useRecoilState(ShowStudentList);
  const [memberCntList, setMemberCntList] = useState<MemberCntList>();
  const [addMember, setAddMember] = useRecoilState(AddMember);
  const SelctedCategory = useRecoilValue(newSelectedData);
  const showCategoryName = useSetRecoilState(ShowCategoryName);
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const { createCategoryName } = useCreateCategory();
  const setMemberData = useSetRecoilState(MemberData);
  const setCatgoryData = useSetRecoilState(CategoryDataAtom);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];

    if (target.isIntersecting && !isPageLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });

    const observerTarget = document.getElementById("observe");

    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  const OnLoadWasList = () => {
    const memberData = useRecoilValue(MemberData);
    setSelectedStudents(memberData.map((mebmer) => ({ id: mebmer.id, name: mebmer.name })));
  };

  const onClickAddStudent = (studentId: number, studentName: string) => {
    const AllMember = memberInfo.map((member) => ({ id: member.memberId, name: member.name }));
    const IsAllSelected = AllMember.every((member1) => selectedStudents.some((member2) => member2.id === member1.id));
    const AllSelectedCancle = selectedStudents.filter(
      (member1) => !AllMember.some((member2) => member2.id === member1.id),
    );

    if (studentId === -1) {
      // 전체 멤버 선택 && 전체 멤버 선택 취소
      if (IsAllSelected) {
        setIsAllSelectedStudents(true);
        setSelectedStudents(AllSelectedCancle);
      } else {
        setIsAllSelectedStudents(false);
        setSelectedStudents((prev) => [...prev, ...AllMember]);
      }
    } else if (selectedStudents.some((student) => student.id === studentId)) {
      setSelectedStudents(selectedStudents.filter((student) => student.id !== studentId));
      setIsAllSelectedStudents(true);
    } else {
      // 새로운 멤버 선택
      if (
        AllMember.length - 1 ===
        selectedStudents.filter((member1) => AllMember.some((member2) => member2.id === member1.id)).length
      ) {
        setIsAllSelectedStudents(false);
      }
      setSelectedStudents((prev) => [...prev, { id: studentId, name: studentName }]);
    }
  };

  const onClickRemoveStudent = (studentId: number) => {
    if (memberInfo.some((member) => member.memberId === studentId)) {
      setIsAllSelectedStudents(true);
    }
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

  const onLoadStudentInfo = useCallback(
    (grade: number, cls: number) => {
      alimoV1Axios
        .get(`/member/student-list`, {
          params: {
            page: page,
            size: 20,
            grade: grade,
            room: cls,
          },
        })
        .then((res) => {
          const StudentData = res.data.data;
          const InCludeStudent = StudentData.every((member1: MemberList) =>
            selectedStudents.some((member2) => member2.id === member1.memberId),
          );
          setMemberInfo(StudentData);
          setGrade(`${grade}학년`);
          setRoom(`${cls}반`);

          if (InCludeStudent) {
            setIsAllSelectedStudents(false);
          } else {
            setIsAllSelectedStudents(true);
          }
        });
    },
    [page, selectedStudents],
  );

  useEffect(() => {
    if (addMember === true) {
      onLoadStudentInfo(convertStudentInfo.convertGrade(grade), convertStudentInfo.convertRoom(room));
    }
  }, [grade, room, addMember]);

  const onLoadTeacherInfo = async () => {
    await alimoV1Axios.get("/member/teacher-list?page=1&size=1000").then((res) => {
      const TeacherData = res.data.data;
      const InCludeTeacher = TeacherData.every((member1: MemberList) =>
        selectedStudents.some((member2) => member2.id === member1.memberId),
      );
      setMemberInfo(TeacherData);
      setRoom("선생님");

      if (InCludeTeacher) {
        setIsAllSelectedStudents(false);
      } else {
        setIsAllSelectedStudents(true);
      }
    });
  };

  const onLoadParentInfo = async () => {
    await alimoV1Axios.get(`/member/parent-list?page=1&size=1000`).then((res) => {
      const ParentData = res.data.data;
      const InCludeParent = ParentData.every((member1: MemberList) =>
        selectedStudents.some((member2) => member2.id === member1.memberId),
      );
      setMemberInfo(ParentData);
      setRoom("학부모");

      if (InCludeParent) {
        setIsAllSelectedStudents(false);
      } else {
        setIsAllSelectedStudents(true);
      }
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
          .then(async () => {
            setShowStudentList(false);
            showCategoryName(false);
            await alimoV1Axios
              .get(`/category/get-category?searchKeyword=`)
              .then((res) => {
                setCatgoryData(res.data.data);
              })
              .then(() => showToast("success", "카테고리 추가 성공"));
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
          .then(async () => {
            showCategoryName(false);
            setShowStudentList(false);
            setAddMember(false);
            try {
              await alimoV1Axios
                .get(`/category/get-member?page=1&size=1000&categoryName=${SelctedCategory}&searchKeyword=`)
                .then((res) => {
                  setMemberData(res.data.data);
                  console.log(res.data.data);
                });
              await alimoV1Axios
                .get(`/category/get-category?page=1&size=1000&searchKeyword=`)
                .then((res) => {
                  setCatgoryData(res.data.data);
                })
                .then(() => showToast("success", "멤버 추가 성공"));
            } catch (error) {}
          });
      } catch (error) {
        showToast("error", "알 수 없는 에러가 발생하였습니다.");
      }
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
    grade,
    room,
    selectedStudents,
    isAllSelectedStudents,
    memberCntList,
    showStudentList,
    searchMember,
    addMember,
    filteredMemberInfo,
    setSelectedStudents,
    onClickAddStudent,
    onClickRemoveStudent,
    getMemberCntList,
    onLoadStudentInfo,
    onLoadTeacherInfo,
    onLoadParentInfo,
    onSearchMember,
    OnLoadWasList,
    onClickAdd,
    handlePopUp,
    onClose,
  };
};

export default useAddStudnet;
