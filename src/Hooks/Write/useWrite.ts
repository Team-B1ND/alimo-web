import { showToast } from "src/lib/Toast/Swal";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Student {
  name: string;
}

const useWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [selectedCategory, setSelectedCategory] = useState<Student[]>([]);
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>("");

  const imageInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef = useRef<HTMLInputElement>(null);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };

  useEffect(() => {
    if (title && context && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [title, context, selectedCategory]);

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("");
    }

    setFile(selectedFile);
  };

  const onClickAddCategory = (studentName: string) => {
    const isSelected = selectedCategory.some((student) => student.name === studentName);

    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((student) => student.name !== studentName));
    } else {
      const newStudent: Student = { name: studentName };
      setSelectedCategory([...selectedCategory, newStudent]);
    }
  };

  const handleWriteAllow = () => {
    if (!notAllow) {
      showToast("success", "공지가 등록되었습니다.");
      navigate("/main");
    } else {
      showToast("error", "공지 등록에 실패하였습니다.");
    }
  };

  return {
    title,
    context,
    notAllow,
    onChangeTitle,
    onChangeContext,
    imageInputRef,
    FileInputRef,
    handleImageClick,
    handleFileChange,
    fileName,
    selectedCategory,
    onClickAddCategory,
    handleWriteAllow,
  };
};

export default useWrite;
