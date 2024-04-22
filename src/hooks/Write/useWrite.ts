import axios from "axios";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/libs/Toast/Swal";
import Swal from "sweetalert2";
import CONFIG from "src/config/config.json";
import { categoryListState } from "src/store/profile/ProfileStore";
import { Category } from "src/types/Write/write.type";
import cookie from "src/libs/cookies/cookie";

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
  const CategoryList = useRecoilValue(categoryListState);

  //제목, 내용, 카테고리 미 입력 혹은 미 선택시 버튼 비활성화 로직
  useEffect(() => {
    if (title && context && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [title, context, selectedCategory]);

  //제목 입력
  const OnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  //내용 입력
  const OnChangeContext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };

  //사진업로드 이미지 클릭시 Ref로 선택창
  const HandleImageClick = () => {
    imageInputRef.current?.click();
  };

  //파일 선택 전체 로직
  const HandleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray = Array.prototype.slice.call(files);

    //파일 갯수 제한
    if (fileArray.length <= 3) {
      setFile(fileArray);

      //파일 이름
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

  //이미지 업로드 전체 로직
  const HandleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray: File[] = Array.prototype.slice.call(files);

    //이미지 업로드 개수 제한
    if (fileArray.length <= 2) {
      setImage(fileArray);
    } else {
      showToast("info", "이미지는 최대 2개까지 올릴 수 있습니다.");
    }
  };

  const DeletePreviewImage = () => {
    setImage([]);
  };

  //카테고리 선택 로직 (중복선택 가능)
  const HandleAddCategory = async (CategoryName: string) => {
    const isSelected = selectedCategory.some(
      (category) => category.name === CategoryName
    );
    if (isSelected) {
      setSelectedCategory(
        selectedCategory.filter((category) => category.name !== CategoryName)
      );
    } else {
      const newCategory: Category = { name: CategoryName };
      setSelectedCategory([...selectedCategory, newCategory]);
    }
  };

  //선택한 카테고리에 따른 멤버 수 확인 로직
  const GetMemberCnt = async () => {
    const categoryParams = selectedCategory
      ? selectedCategory.map((category) => category.name)
      : "";
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

  //제목, 내용, 이미지, 파일을 담기위한 폼데이터 객체
  const formData = new FormData();

  //게시하기 버튼 클릭시 사용되는 로직
  const AllowWriteButton = async () => {
    //버튼 비활성화일때 로직
    if (notAllow) {
      showToast("error", "빈곳이 없게 작성하여주세요");
    } else {
      //버튼이 활성화 되어있고, 클릭했을때 확성기 사용여부 체크 로직
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

      //제목, 내용, 확성기 사용여부, 선택한 카테고리를 담은 객체
      const data = {
        title: title,
        content: context,
        speaker: isSpeaker,
        categories: selectedCategory.map((category) => category.name),
      };

      //data객체를 formData에 올리기위한 로직
      const JSONDATA = JSON.stringify(data);
      formData.append(
        "data",
        new Blob([JSONDATA], { type: "application/json" })
      );

      //파일을 formData에 올리기위한 로직
      if (file) {
        Array.from(file).forEach((file) => {
          formData.append("file", file);
        });
      }
      //이미지를 formData에 올리기위한 로직
      if (image) {
        Array.from(image).forEach((image) => {
          formData.append("image", image);
        });
      }

      try {
        //alimoV1Axios사용시 Content-Type이 multipart/form-data로 가지 않기때문에 일반 axios사용 -> 추후 개선 예정
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
