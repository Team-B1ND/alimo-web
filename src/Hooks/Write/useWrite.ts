import React, { ChangeEvent, useRef, useState } from "react";

const useWrite = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File>();
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

  return {
    title,
    onChangeTitle,
    imageInputRef,
    FileInputRef,
    handleImageClick,
    handleFileChange,
    fileName,
  };
};

export default useWrite;
