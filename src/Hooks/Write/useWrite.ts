import axios from "axios";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";
import Swal from "sweetalert2";
import CONFIG from "src/config/config.json";
import { categoryListState } from "src/store/profile/ProfileStore";
import { Category } from "src/types/Write/write.type";
import token from "src/lib/token/token";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import cookie from "src/lib/cookies/cookie";

const useWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [file, setFile] = useState<File[]>();
  const [image, setImage] = useState<File[]>();
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [memberCnt, setMemberCnt] = useState<number>();
  const ACCESS_TOKEN = token.getToken("ACCESS_TOKEN_KEY");
  const CategoryList = useRecoilValue(categoryListState);

  useEffect(() => {
    if (title && context && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [title, context, selectedCategory]);

  const formData = new FormData();

  const OnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const OnChangeContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };

  const HandleImageClick = () => {
    imageInputRef.current?.click();
  };

  const HandleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray = Array.prototype.slice.call(files);

    if (fileArray.length <= 3) {
      setFile(fileArray);
      const newFileNames = fileArray.map((file) => file.name);
      setFileName(newFileNames);
    } else {
      showToast("info", "파일은 최대 3개까지 올릴 수 있습니다.");
    }
  };

  const DeleteFile = () => {
    setFile([]);
    setFileName([]);
  };

  const HandleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray: File[] = Array.prototype.slice.call(files);

    if (fileArray.length <= 2) {
      setImage(fileArray);
    } else {
      showToast("info", "이미지는 최대 2개까지 올릴 수 있습니다.");
    }
  };

  const DeletePreviewImage = () => {
    setImage([]);
  };

  const HandleAddCategory = async (CategoryName: string) => {
    const isSelected = selectedCategory.some((category) => category.name === CategoryName);
    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((category) => category.name !== CategoryName));
    } else {
      const newCategory: Category = { name: CategoryName };
      setSelectedCategory([...selectedCategory, newCategory]);
    }
  };

  const GetMemberCnt = async () => {
    const categoryParams = selectedCategory ? selectedCategory.map((category) => category.name) : "";
    try {
      await alimoV1Axios
        .get(`/category/member-cnt`, {
          params: {
            category: categoryParams.toString(),
          },
        })
        .then((res) => {
          setMemberCnt(res.data.data.memberCnt);
        });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    GetMemberCnt();
  }, [selectedCategory.length]);

  const AllowWriteButton = async () => {
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
          setIsSpeaker(true);
        } else {
          setIsSpeaker(false);
        }
      });

      const data = {
        title: title,
        content: context,
        speaker: isSpeaker,
        categories: selectedCategory.map((category) => category.name),
      };

      const JSONDATA = JSON.stringify(data);
      formData.append("data", new Blob([JSONDATA], { type: "application/json" }));

      if (file) {
        Array.from(file).forEach((file) => {
          formData.append("file", file);
        });
      }

      if (image) {
        Array.from(image).forEach((image) => {
          formData.append("image", image);
        });
      }

      try {
        await axios
          .post(`${CONFIG.serverUrl}/notification/generate`, formData, {
            headers: {
              Authorization: `Bearer ${cookie.getCookie("access-token")}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            navigate("/");
          });
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
    OnChangeTitle,
    OnChangeContext,
    imageInputRef,
    HandleImageClick,
    HandleFileChange,
    DeleteFile,
    HandleImageChange,
    DeletePreviewImage,
    fileName,
    selectedCategory,
    HandleAddCategory,
    AllowWriteButton,
  };
};

export default useWrite;
