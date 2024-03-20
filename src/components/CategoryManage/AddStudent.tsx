import React from "react";
import * as S from "src/components/CategoryManage/style/AddStudent.style";
import CheckStudent from "src/assets/img/CheckStudent.png";
import NoneCheckStudent from "src/assets/img/NoneCheckStudent.png";
import ProfileImg from "src/assets/img/ProfileImg.svg";
import CloseImg from "src/assets/img/CloseImg.png";
import DenyStudent from "src/assets/img/DenyStudent.svg";
import useCategoryAdd from "src/Hooks/Category/useCategoryAdd";

const AddStudent = ({ onClose }: { onClose: () => void }) => {
  const {
    createCategoryName,
    selectedStudents,
    selectAccess,
    onClickAddStudent,
    onClickAccess,
    handleRole,
    onClickAddCategory,
  } = useCategoryAdd();

  return (
    <S.AddStudentWrap>
      <S.Main>
        <S.SelectStudentDialog>
          <S.TopNav>
            <S.SelectedStudnetTitle>학생을 선택해주세요</S.SelectedStudnetTitle>
          </S.TopNav>
          <S.SelectionWrap>
            <S.ChoiceInfoWrap>
              <S.StudentWrap>
                <S.GradeInfo onClick={() => handleRole("STUDENT", 1, null)}>1학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => handleRole("STUDENT", 1, 1)}>1반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 1, 2)}>2반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 1, 3)}>3반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 1, 4)}>4반 (18)</span>
                </S.ClassInfo>
                <S.GradeInfo onClick={() => handleRole("STUDENT", 2, null)}>2학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => handleRole("STUDENT", 2, 1)}>1반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 2, 2)}>2반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 2, 3)}>3반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 2, 4)}>4반 (18)</span>
                </S.ClassInfo>
                <S.GradeInfo onClick={() => handleRole("STUDENT", 3, null)}>3학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => handleRole("STUDENT", 3, 1)}>1반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 3, 2)}>2반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 3, 3)}>3반 (18)</span>
                  <span onClick={() => handleRole("STUDENT", 3, 4)}>4반 (18)</span>
                </S.ClassInfo>
              </S.StudentWrap>
              <S.TeacherWrap>
                <S.TeacherAndParentsInfo onClick={() => handleRole("TEACEHR", null, null)}>
                  교사 (20)
                </S.TeacherAndParentsInfo>
              </S.TeacherWrap>
              <S.ParantWrap>
                <S.TeacherAndParentsInfo onClick={() => handleRole("PARENT", null, null)}>
                  학부모
                </S.TeacherAndParentsInfo>
              </S.ParantWrap>
            </S.ChoiceInfoWrap>
            <S.StudentSelectionWrap>
              <S.MemberSearchInput placeholder="멤버 검색" type="search" />
              <S.UtilityWrap>
                <S.Class>4반</S.Class>
                &nbsp;
                <S.ClassStudent>18</S.ClassStudent>
                <S.AllSelect>전체선택</S.AllSelect>
              </S.UtilityWrap>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "김가영") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("김가영")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "이해준") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("이해준")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>이해준</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "이강현") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("이강현")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>이강현</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "전민찬") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("전민찬")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>전민찬</S.StudentName>
              </S.StudentList>
            </S.StudentSelectionWrap>
            <S.ViewSelectedStudentWrap>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
            </S.ViewSelectedStudentWrap>
          </S.SelectionWrap>
          <S.ButtonWrap>
            <S.CancleButton onClick={onClose}>취소</S.CancleButton>
            <S.ConfirmButton onClick={onClickAddCategory}>선택</S.ConfirmButton>
          </S.ButtonWrap>
          <S.CloseButton src={CloseImg} onClick={onClose}></S.CloseButton>
        </S.SelectStudentDialog>
      </S.Main>
    </S.AddStudentWrap>
  );
};

export default AddStudent;
