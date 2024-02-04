import React, { ChangeEvent, useRef, useState } from "react";

interface Student {
  name: string;
}

const useWrite = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [selectedCategory, setSelectedCategory] = useState<Student[]>([]);
  const [fileName, setFileName] = useState<string>("");

  const imageInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef = useRef<HTMLInputElement>(null);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

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

  return {
    title,
    onChangeTitle,
    imageInputRef,
    FileInputRef,
    handleImageClick,
    handleFileChange,
    fileName,
    selectedCategory,
    onClickAddCategory,
  };
};

export default useWrite;
