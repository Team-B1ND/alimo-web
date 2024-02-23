import axios from "axios";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";
import CONFIG from "src/config/config.json";
import Swal from "sweetalert2";
import { customAxios } from "src/lib/Axios/CustomAxios";

interface Category {
  name: string;
}

const useWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState<File>();
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
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
    setImage(selectedImage);
    setImageName(selectedImage?.name || "");
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
      await Swal.fire({
        title: "확성기 기능을 사용하시겠습니까?",
        text: "기능을 사용하지 않더라도 공지는 등록됩니다.",
        showCancelButton: true,
        confirmButtonColor: "#FECE23",
        focusConfirm: true,
        cancelButtonColor: "#AAAAAA",
        focusCancel: false,
        confirmButtonText: "사용하기",
        cancelButtonText: "사용안함",
      }).then((result) => {
        if (result.isConfirmed) {
          showToast("success", "확성기가 사용되었습니다.");
          setIsSpeaker(true);
        } else {
          showToast("success", "확성기를 사용하지 않습니다.");
          setIsSpeaker(false);
        }
      });

      try {
        const formData = new FormData();
        if (image) {
          formData.append("image", imageName);
        }
        if (file) {
          formData.append("file", fileName);
        }
        console.log(formData);
        const response = await customAxios.post(
          "notification/generate",
          {
            data: {
              title: title,
              content: context,
              speaker: isSpeaker,
              role: selectedCategory,
            },
            image: formData.get("image"),
            file: formData.get("file"),
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        if (response.status === 200) {
          showToast("success", "공지가 등록되었습니다.");
          navigate("/main");
        } else {
          showToast("error", "공지 등록에 실패하였습니다.");
        }
      } catch (error) {
        console.error(error);
        showToast("erorr", "통신 오류");
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
