import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImageData } from "@src/Types/MyNotificationDetail/Image.interface";
import { FileData } from "@src/Types/MyNotificationDetail/File.interface";
import { CommentData } from "@src/Types/CommentList/CommentList.interface";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";

const useMyNotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [fileData, setFileData] = useState<FileData[]>([]);
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [isImageError, setIsImageError] = useState(true);
  const [fileSize, setFileSize] = useState<string[]>([]);
  const [commentCreateCount, setCommentCreateCount] = useState<number>(0);

  // 파일 다운로드
  const HandleFileDownLoad = (fileUrl: string, fileName: string) => {
    window.open(fileUrl);
    // fetch(fileUrl)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", fileName);
    //     document.body.appendChild(link);
    //     link.click();
    //     if (link.parentNode) {
    //       link.parentNode.removeChild(link);
    //     }
    //   })
    //   .catch((error) =>
    //     console.error("파일 다운로드 중 오류가 발생했습니다.", error)
    //   );
  };

  // 이미지 에러 -> 이미지 안 띄움
  const HandleImageError = () => {
    setIsImageError(false);
  };

  // 댓글 달기
  const handleCommentCreate = async (
    commentValue: string,
    setCommentValue: Function
  ) => {
    if (commentValue !== "") {
      try {
        setCommentValue("");
        await alimoV1Axios
          .post(`comment/create/${id}`, {
            content: commentValue,
            parentId: null,
          })
          .then(() => {
            setCommentCreateCount((prev) => prev + 1);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 닫기 버튼 클릭 -> 내 공지글 보기로 이동
  const HandleClose = () => {
    navigate("/write-read")
  }

  // 대댓글 달기
  const handleReplyCommentCreate = async (
    replyCommentValue: string,
    commentId: number,
    setIsReplyCommentWriteShow: Function
  ) => {
    try {
      await alimoV1Axios
        .post(`comment/create/${id}`, {
          content: replyCommentValue,
          parentId: commentId,
        })
        .then(() => {
          setIsReplyCommentWriteShow(false);
          setCommentCreateCount((prev) => prev + 1);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // 공지글 디테일 데이터 요청
  useEffect(() => {
    const NotificationRead = async () => {
      await alimoV1Axios
        .get(`notification/read/${id}`)
        .then((res) => {
          setData(res.data.data);
          setImageData(res.data.data.images);
          setFileData(res.data.data.files);
          setCommentData(res.data.data.comments);

          let fileSizeData: Array<string> = [];
          const fileData = res.data.data.files;
          fileData.map((fileData: FileData) => {
            let fileSize = fileData.fileSize;
            const sizes = ["B", "KB", "MB", "GB", "TB"];

            for (let i = 0; i < sizes.length; i++) {
              if (parseInt(fileSize) < 1024) {
                fileSizeData.push(`${fileSize} ${sizes[i]}`);
                break;
              }
              fileSize = `${(parseInt(fileSize) / 1024).toFixed(1)}`;
            }
          });
          setFileSize(fileSizeData);
        });
    };
    NotificationRead();
  }, [id, commentCreateCount]);
  return {
    data,
    imageData,
    fileData,
    commentData,
    HandleFileDownLoad,
    isImageError,
    HandleImageError,
    fileSize,
    HandleClose,
    handleCommentCreate,
    handleReplyCommentCreate,
  };
};

export default useMyNotificationDetail;
