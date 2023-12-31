import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "src/components/SideBar/SideBar";

const Write = () => {
  //   const [title, setTitle] = useState<string>("");
  //   const [content, setContent] = useState<string>("");

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };

  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  //   const handlePostSubmit = () => {
  //     // 글 작성 제출 로직 추가
  //     console.log("제목:", title);
  //     console.log("내용:", content);
  //     // TODO: 글 작성 로직 구현
  //   };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideBar />
      </div>
      <Container>
        <TitleInput type="text" placeholder="글 제목을 입력하세요" />
        <ContentTextArea placeholder="글 내용을 입력하세요" />
        <SubmitButton>글 작성</SubmitButton>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
`;

const ContentTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export default Write;
