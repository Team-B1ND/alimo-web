import axios from "axios";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";
import Swal from "sweetalert2";
import CONFIG from "src/config/config.json";
import { categoryListState } from "src/store/profile/ProfileStore";
import { Category } from "src/types/Write/interface";

const useWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [file, setFile] = useState<File[]>();
  const [image, setImage] = useState<File[]>();
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [memberCnt, setMemberCnt] = useState<number>();
  const accessToken = localStorage.getItem("accestoken");

  const CategoryList = useRecoilValue(categoryListState);

  useEffect(() => {
    if (title && context && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [title, context, selectedCategory]);

  var formData = new FormData();

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
    const files = e.target.files;
    const fileArray = Array.prototype.slice.call(files);
    setFile(fileArray);
    fileArray.map((name, idx) => {
      setFileName(fileArray?.[idx].name);
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray: File[] = Array.prototype.slice.call(files);
    setImage(fileArray);
  };

  const deletePreviewImage = () => {
    setImage([]);
  };

  const onClickAddCategory = async (CategoryName: string) => {
    const isSelected = selectedCategory.some((category) => category.name === CategoryName);
    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((category) => category.name !== CategoryName));
    } else {
      const newCategory: Category = { name: CategoryName };
      setSelectedCategory([...selectedCategory, newCategory]);
    }

    try {
      const params = { category: selectedCategory.map((category) => category.name) };
      const response = await axios.get(`${CONFIG.serverUrl}/category/member-cnt`, {
        params: params,
      });

      if (response.status === 200) {
        setMemberCnt(response.data.memberCnt);
      }
    } catch (e) {
      console.error(e);
    }
    console.log(selectedCategory.map((cateogy) => cateogy.name));
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

      const data = {
        title: title,
        content: context,
        speaker: isSpeaker,
        categories: selectedCategory.map((category) => category.name),
      };
      console.log(formData.get(JSON.stringify(data)));

      const JSONDATA = JSON.stringify(data);
      formData.append("data", new Blob([JSONDATA], { type: "application/json" }));
      if (file) {
        file.map((file) => {
          formData.append("file", file);
        });
      }

      if (image) {
        image.map((file) => {
          formData.append("image", file);
        });
      }

      try {
        console.log(formData);
        console.log(accessToken);

        const response = await axios.post(`${CONFIG.serverUrl}/notification/generate`, formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          showToast("success", "공지가 등록되었습니다.");
          navigate("/main");
        } else {
          showToast("error", "공지 등록에 실패하였습니다.");
        }
      } catch (error) {
        console.error(error);
        showToast("error", "통신 오류");
      }
    }
  };

  return {
    title,
    context,
    notAllow,
    image,
    CategoryList,
    memberCnt,
    onChangeTitle,
    onChangeContext,
    imageInputRef,
    handleImageClick,
    handleFileChange,
    handleImageChange,
    deletePreviewImage,
    fileName,
    selectedCategory,
    onClickAddCategory,
    allowWriteButton,
  };
};

export default useWrite;
