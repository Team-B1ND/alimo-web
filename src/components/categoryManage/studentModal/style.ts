import styled from "styled-components";

export const AddStudentWrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 6;
`;

export const Main = styled.div`
  background: rgba(217, 217, 217, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const SelectStudentDialog = styled.div`
  position: absolute;
  width: calc(100vw - 45vw);
  height: calc(100vh - 30vh);

  background: #fff;
  border: none;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
`;

export const TopNav = styled.div`
  width: 100%;
  height: calc(100vh - 90vh);

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;

  border-bottom: 1px solid #e6e6e6;

  & > img {
    margin-left: 37vw;
    cursor: pointer;
  }
`;

export const SelectedStudnetTitle = styled.h1`
  color: #000;

  /* Subtitle */

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 3vw;
`;

export const SelectionWrap = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: calc(100vh - 50vh);

  overflow: scroll;
`;

export const ChoiceInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  background: #f4f5f9;
  border: 1px solid #e6e6e6;
  border-top: none;

  justify-content: space-evenly;
  overflow: scroll;

  scrollbar-width: none; /* 파이어폭스에서 스크롤바를 안보이게 */

  &::-webkit-scrollbar {
    /* 크롬, 사파리, 오페라, 마소엣지 브라우저에서 스크롤바를 안보이게  */
    display: none;
  }

  gap: 10px;
`;

export const StudentWrap = styled.div`
  overflow: scroll;
  
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const ParantWrap = styled.div``;

export const TeacherWrap = styled.div``;

export const GradeInfo = styled.span`
  color: #000;

  /* Label */

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 2vh;
  margin-left: 1vw;

  cursor: pointer;
`;

export const ClassInfo = styled.div`
  width: calc(100vw - 90vw);
  height: calc(100vh - 90vh);

  padding-left: 1vw;

  border-left: 1px solid #e6e6e6;

  margin-left: 2vw;
  margin-top: 1vh;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  span {
    margin-bottom: 1vh;
  }
`;

export const TeacherAndParentsInfo = styled.span`
  color: #000;

  /* Label */

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 2vh;
  margin-left: 1vw;

  cursor: pointer;
`;

export const StudentSelectionWrap = styled.div`
  width: 50%;
  height: 100%;

  border: 1px solid #e6e6e6;
  border-top: none;
  border-left: none;

  overflow: scroll;
`;

export const MemberSearchInput = styled.input`
  width: calc(100vw - 90vw);
  height: calc(100vh - 96vh);

  padding-left: 1vw;

  border: 1px solid #e6e6e6;
  border-radius: 8px;

  margin-top: 1vh;
  margin-left: 15vw;

  /* Caption */

  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: var(--Gray500, #aaa);
  }

  &:focus {
    outline: none;
  }
`;

export const UtilityWrap = styled.div`
  display: flex;
`;

export const Class = styled.span`
  color: #000;

  /* Body */

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 1vw;
`;

export const ClassStudent = styled.span`
  color: var(--Gray500, #aaa);

  /* Body */

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AllSelect = styled.span`
  color: var(--Gray600, #787878);

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  margin-left: 19vw;
  margin-top: 1vh;
`;

export const StudentList = styled.div`
  width: 100%;
  height: calc(100vh - 93vh);

  margin-top: 2vh;

  display: flex;
  flex-direction: row;

  align-items: center;
  align-self: center;

  img {
    width: calc(100vw - 98vw);
    height: calc(100vw - 98vw);

    margin-left: 1vw;
    border-radius: 50%;
  }
`;

export const ProfileImg = styled.img`
  width: calc(100vw - 95vw);
  height: calc(100vw - 95vw);
`;

export const StudentName = styled.span`
  color: var(--Main900, #020202);

  /* Label */

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-left: 1vw;
`;

export const ViewSelectedStudentWrap = styled.div`
  width: 25%;
  height: 100%;

  border-bottom: 1px solid #e6e6e6;
  background: var(--Gray100, #f4f5f9);
  display: flex;
  flex-direction: column;
`;

export const ViewSelectedStudent = styled.div`
  background: transparent;

  width: 100%;
  height: 13%;

  margin-bottom: 20px;

  display: flex;
  align-items: center;

  & img {
    width: 30px;
    height: 30px;

    margin-left: 1vw;
  }
`;

export const ViewStudentName = styled.span`
  font-size: 1.2rem;
  font-weight: 400;

  margin-left: 1vw;
`;

export const DenyStudent = styled.img`
  width: calc(100vw - 99vw);
  height: calc(100vw - 99vw);

  position: relative;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 14%;

  border: none;
  border-radius: 0px 0px 8px 8px;

  background-color: white;

  display: flex;

  align-items: center;
  align-self: center;
  justify-content: flex-end;
`;

export const CancleButton = styled.button`
  width: calc(100vw - 93vw);
  height: calc(100vh - 95vh);

  border: none;
  background: #fff;
  color: #787878;

  font-size: 1rem;
  font-weight: 400;
`;

export const ConfirmButton = styled.button`
  width: calc(100vw - 93vw);
  height: calc(100vh - 95vh);

  border: none;
  border-radius: 8px;
  background: #fece23;

  margin-right: 2vw;
  margin-left: 1vw;

  font-size: 1rem;
  font-weight: 400;
`;

export const CloseButton = styled.img`
  position: absolute;
  left: 52vw;
  top: 3vh;
  cursor: pointer;

  width: calc(100vw - 98vw);
`;
