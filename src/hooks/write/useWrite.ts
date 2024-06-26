import React, { useState, useRef, useEffect, ChangeEvent, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { showToast } from "src/libs/toast/swal";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { Category, WriteElemProps } from "src/types/write/write.type";
import { NotificationIdData } from "src/store/write/write.store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import CONFIG from "src/config/config.json";

const useWrite = () => {
  const navigate = useNavigate();
  const ACCESS_TOKEN = Token.getToken(ACCESS_TOKEN_KEY);
  const [wirteElem, setWirteElem] = useState<WriteElemProps>({
    title: "",
    content: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [, setFile] = useState<File[]>([]);
  const [image, setImage] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const [fileId, setFileId] = useState<number>(0);
  const [imageId, setImageId] = useState<number>(0);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const NotificationId = useRecoilValue(NotificationIdData);
  // NotificationId 예외처리
  if (NotificationId === 0) {
    showToast("error", "time out");
    navigate("/");
  }

  //제목, 내용, 카테고리 미 입력 혹은 미 선택시 버튼 비활성화 로직
  useEffect(() => {
    if (wirteElem.title && wirteElem.content && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [wirteElem.title, wirteElem.content, selectedCategory]);

  const handleWriteElem = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value, name } = e.target;
      setWirteElem((prev) => ({ ...prev, [name]: value }));
    },
    [setWirteElem],
  );

  //사진업로드 이미지 클릭시 Ref로 선택창
  const HandleImageClick = () => {
    imageInputRef.current?.click();
  };

  //파일 선택 전체 로직
  const HandleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray = Array.prototype.slice.call(files);

    //파일 갯수 제한

    //파일 이름
    const newFileNames = fileArray.map((file) => file.name);
    setFileName(newFileNames);
    setFile(fileArray);
    fileArray.map((file) => {
      formData.append("file", file);
    });

    try {
      await axios
        .post(
          `${CONFIG.serverUrl}/files/save?notificationId=${NotificationId}`,
          {
            file: formData.get("file"),
          },
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "multipart/form-data",
            },
          },
        )
        .then((res) => {
          setFileId(res.data.data.id);
        });
    } catch (error) {
      showToast("error", "파일크기가 넘었습니다");
      console.log(error);
    }
  };

  const DeleteFile = async () => {
    try {
      await alimoV1Axios.delete(`files/delete?fileId=${fileId}`).then(() => {
        setFile([]);
        setFileName([]);
      });
    } catch (error) {
      showToast("error", "파일크기가 넘었습니다");
      console.log(error);
    }
  };

  //이미지 업로드 전체 로직
  const HandleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files: FileList | null = e.target.files;
      if (!files) return;

      const fileArray: File[] = Array.from(files);
      const fileURLs: string[] = [];

      for (let i = 0; i < fileArray.length; i++) {
        const currentFile = fileArray[i];
        const imageURL = URL.createObjectURL(currentFile);
        fileURLs.push(imageURL);
      }

      setImage((prevImages) => [...prevImages, ...fileURLs]);

      const formData = new FormData();
      fileArray.forEach((file) => formData.append("image", file));

      await axios
        .post(
          `${CONFIG.serverUrl}/files/save?notificationId=${NotificationId}`,
          {
            file: formData.get("image"),
          },
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "multipart/form-data",
            },
          },
        )
        .then((res) => {
          setImageId(res.data.data.id);
          console.log(res.data.status);
        });
    } catch (error) {
      showToast("error", "파일크기가 넘었습니다");

      console.log(error);
    }
  };

  const DeletePreviewImage = async () => {
    try {
      setImage([]);
      await alimoV1Axios.delete(`/files/delete?fileId=${imageId}`);
    } catch (error) {
      console.log(error);
    }
  };

  //글쓰기 카테고리 확인
  const handleCheckCategory = async () => {
    await alimoV1Axios.get("/category/get-notification-category").then((res) => {
      setCategoryList(res.data.data.categoryNameList);
    });
  };

  useEffect(() => {
    handleCheckCategory();
  }, []);

  //카테고리 선택 로직 (중복선택 가능)
  const HandleAddCategory = async (CategoryName: string) => {
    const isSelected = selectedCategory.some((category) => category.name === CategoryName);
    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((category) => category.name !== CategoryName));
    } else {
      const newCategory: Category = { name: CategoryName };
      setSelectedCategory([...selectedCategory, newCategory]);
    }
  };

  //선택한 카테고리에 따른 멤버 수 확인 로직
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

  const formData = new FormData();
  let speaker = false;
  const AllowWriteButton = async () => {
    try {
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
          speaker = true;
        } else {
          speaker = false;
        }
      });

      await alimoV1Axios
        .patch(`/notification/update/${NotificationId}`, {
          title: wirteElem.title,
          content: wirteElem.content,
          speaker: speaker,
          categories: selectedCategory.map((category) => category.name),
        })
        .then(() => {
          showToast("success", "공지작성 성공");
          navigate("/write-read");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    wirteElem,
    notAllow,
    image,
    categoryList,
    memberCnt,
    imageInputRef,
    handleWriteElem,
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
