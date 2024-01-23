import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import * as S from "../../style/CategoryAdd.style/CategoryAdd.style";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../lib/Toast/Swal";

interface Student {
  name: string;
}

const CategoryAdd = () => {
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

  const onClickNavigate = () => {
    navigate("/category-manage");
  };

  const onClickAccess = (access: string) => {
    setSelectAccess((prevAccess) => (access === prevAccess ? null : access));
  };

  const onClickAddCategory = () => {
    if (categoryName && selectedStudents.length !== 0 && selectAccess !== null) {
      showToast("success", "카테고리가 추가되었습니다.");
      navigate("/category-manage");
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
  return (
    <S.CategoryAdd>
      <SideBar />
      <S.CategoryAddView>
        <S.CategoryNameWrap>
          <S.H1 style={{ marginTop: "1vh" }}>카테고리 이름</S.H1>
          <S.CategoryNameInput type="text" value={categoryName} onChange={onChangeCategoryName} />
        </S.CategoryNameWrap>
        <S.SelectMemberWrap>
          <S.H1>멤버 선택</S.H1>
          <S.DropDownContentWrap>
            <S.DropDownContent
              onClick={() => onClickAddStudent("김가영")}
              className={selectedStudents.some((student) => student.name === "김가영") ? "changeBG" : "defaultBG"}
            >
              김가영
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("이해준")}
              className={selectedStudents.some((student) => student.name === "이해준") ? "changeBG" : "defaultBG"}
            >
              이해준
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("박병준")}
              className={selectedStudents.some((student) => student.name === "박병준") ? "changeBG" : "defaultBG"}
            >
              박병준
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("이강현")}
              className={selectedStudents.some((student) => student.name === "이강현") ? "changeBG" : "defaultBG"}
            >
              이강현
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("이예진1")}
              className={selectedStudents.some((student) => student.name === "이예진1") ? "changeBG" : "defaultBG"}
            >
              이예진1
            </S.DropDownContent>
          </S.DropDownContentWrap>
        </S.SelectMemberWrap>
        <S.GrantAccessWrap>
          <S.H1 style={{ marginTop: "2vh", marginBottom: "3vh" }}>권한 부여</S.H1>
          <S.AccessWrap>
            <S.GrantAccess
              onClick={() => onClickAccess("선생님")}
              className={selectAccess === "선생님" ? "selected" : "basic"}
            >
              선생님
            </S.GrantAccess>
            <S.GrantAccess onClick={() => onClickAccess("PM")} className={selectAccess === "PM" ? "selected" : "basic"}>
              PM
            </S.GrantAccess>
            <S.GrantAccess
              onClick={() => onClickAccess("동아리장")}
              className={selectAccess === "동아리장" ? "selected" : "basic"}
            >
              동아리장
            </S.GrantAccess>
            <S.GrantAccess
              onClick={() => onClickAccess("일반 학생")}
              className={selectAccess === "일반 학생" ? "selected" : "basic"}
            >
              일반 학생
            </S.GrantAccess>
          </S.AccessWrap>
        </S.GrantAccessWrap>
        <S.ButtonWrap>
          <S.StyledButton className="cancle" onClick={onClickNavigate}>
            돌아가기
          </S.StyledButton>
          <S.StyledButton onClick={onClickAddCategory}>추가하기</S.StyledButton>
        </S.ButtonWrap>
      </S.CategoryAddView>
    </S.CategoryAdd>
  );
};

export default CategoryAdd;
