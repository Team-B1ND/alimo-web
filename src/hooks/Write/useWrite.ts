import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  useCallback,
} from "react";
import { useRecoilValue } from "recoil";
import { showToast } from "src/libs/Toast/Swal";
import Swal from "sweetalert2";
import {
  Category,
  CategoryList,
  WriteElemProps,
  notificationId,
} from "src/types/Write/write.type";
import axios from "axios";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";

const useWrite = () => {
  const [wirteElem, setWirteElem] = useState<WriteElemProps>({
    title: "",
    content: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
  const [file, setFile] = useState<File[]>([]);
  const [image, setImage] = useState<File[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [notAllow, setNotAllow] = useState<boolean>(true);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [notificationId, setNotificationId] = useState<notificationId>();

  //제목, 내용, 카테고리 미 입력 혹은 미 선택시 버튼 비활성화 로직
  useEffect(() => {
    if (wirteElem.title && wirteElem.content && selectedCategory.length !== 0) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [wirteElem.title, wirteElem.content, selectedCategory]);

  const handleWriteElem = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { value, name } = e.target;
      setWirteElem((prev) => ({ ...prev, [name]: value }));
      console.log(notificationId);
    },
    [setWirteElem]
  );

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

  //글쓰기 카테고리 확인
  const handleCheckCategory = async () => {
    await alimoV1Axios
      .get("/category/get-notification-category")
      .then((res) => {
        setCategoryList(res.data.data.categoryNameList);
      });
  };

  useEffect(() => {
    handleCheckCategory();
  }, []);

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

  const formData = new FormData();

  const AllowWriteButton = async () => {
    const response = await alimoV1Axios.post("notification/create");
    setNotificationId(response.data.data);
    console.log(notificationId?.NotificationId);

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

    try {
      const NotificationId = notificationId?.NotificationId;
    console.log(NotificationId);
    
      await alimoV1Axios.patch(`/notification/update/${NotificationId}`, {
        title: wirteElem.title,
        content: wirteElem.content,
        speaker: isSpeaker,
        categories: selectedCategory.map((category) => category.name),
      });

      if (image) {
        Array.from(image).forEach((image) => {
          formData.append("image", image);
        });
      }

      if (file) {
        Array.from(file).forEach((file) => {
          formData.append("file", file);
        });
      }

      console.log(formData.get("image"), formData.get("file"));
      try {
        await axios.post(
          `${CONFIG.serverUrl}/files/create?notificationId=${NotificationId}`,
          {
            image: formData.get("image"),
            file: formData.get("file"),
          },
          {
            headers: {
              Authorization: `Bearer ${token.getToken("access-token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
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
