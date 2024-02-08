import axios from "axios";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";
import CONFIG from "src/config.json";

interface Category {
  name: string;
}

interface ImageState {
  file: File | null;
  fileName: string;
}

const useWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState<ImageState>({ file: null, fileName: "" });
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (title && context && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [title, context, selectedCategory]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
    setFileName(selectedFile?.name || "");
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (selectedImage) {
      setImage({
        file: selectedImage,
        fileName: selectedImage.name,
      });
    } else {
      setImage({
        file: null,
        fileName: "",
      });
    }
  };

  const onClickAddCategory = (CategoryName: string) => {
    const isSelected = selectedCategory.some((category) => category.name === CategoryName);
    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((category) => category.name !== CategoryName));
    } else {
      const newCategory: Category = { name: CategoryName };
      setSelectedCategory([...selectedCategory, newCategory]);
    }
  };

  const allowWriteButton = async () => {
    if (notAllow) {
      showToast("error", "빈곳이 없게 작성하여주세요");
    } else {
      try {
        const response = await axios.post(`#`, {
          data: {
            title: `${title}`,
            content: `${context}`,
            speaker: true,
            role: `${selectedCategory}`,
          },
          image: `${image}`,
          file: `${file}`,
        });
        if (response.status === 200) {
          showToast("success", "공지가 성공적으로 등록되었습니다.");
          navigate("/main");
        } else {
          showToast("error", "공지 등록 실패");
        }
      } catch (erorr) {
        showToast("error", "통신오류");
      }
    }
  };

  return {
    title,
    context,
    notAllow,
    onChangeTitle,
    onChangeContext,
    imageInputRef,
    handleImageClick,
    handleFileChange,
    handleImageChange,
    fileName,
    selectedCategory,
    onClickAddCategory,
    allowWriteButton,
  };
};

export default useWrite;
