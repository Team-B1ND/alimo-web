import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";
import CONFIG from "src/config.json";
import axios from "axios";
const useWrite = () => {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [contentAllow, setContentAllow] = useState<boolean>(false);
  const [categoryAllow, setCategoryAllow] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const naviagate = useNavigate();

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (content.length > 0) {
      setContentAllow(true);
    } else {
      setContentAllow(false);
    }
  }, [content]);

  const onChangeImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleClickButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onClickCategory = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  useEffect(() => {
    if (selectedCategory === null) {
      setCategoryAllow(false);
    } else {
      setCategoryAllow(true);
    }
  }, [selectedCategory]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("");
    }

    setFile(selectedFile);
  };

  const onClickConfirmButton = () => {
    if (contentAllow && categoryAllow) {
      showToast("success", "게시되었습니다.");
      naviagate("/main");
      axios.post(`${CONFIG.serverUrl}/notification/generate`, {
        data: {
          content: `${content}`,
          role: [`${selectedCategory}`],
        },
        image: `${image}`,
        file: `${file}`,
      });
    } else if (!contentAllow && categoryAllow) {
      showToast("error", "내용을 입력해주세요.");
    } else {
      showToast("error", "카테고리를 선택해주세요.");
    }
  };

  return {
    content,
    image,
    fileName,
    selectedCategory,
    fileInputRef,
    onChangeContent,
    onChangeImageInput,
    handleClickButton,
    handleCancelImage,
    onClickCategory,
    handleFileChange,
    onClickConfirmButton,
  };
};

export default useWrite;
