import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImageData } from "src/types/MyNotificationDetail/Image.interface";
import { FileData } from "src/types/MyNotificationDetail/File.interface";
import { CommentData } from "src/types/CommentList/CommentList.interface";
import { alimoV1Axios } from "src/lib/axios/customAxios";
import CONFIG from "src/config/config.json";

const useMyNotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [fileData, setFileData] = useState<FileData[]>([]);
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [isImageError, setIsImageError] = useState<boolean>(true);
  const [fileSize, setFileSize] = useState<string[]>([]);
  const [commentCreateCount, setCommentCreateCount] = useState<number>(0);

  // 파일 다운로드
  const HandleFileDownLoad = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };

  // 이미지 에러 -> 이미지 안 띄움
  const HandleImageError = () => {
    setIsImageError(false);
  };

  // 닫기 버튼 클릭 -> 내 공지글 보기로 이동
  const HandleClose = () => {
    navigate("/write-read");
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
          .post(`${CONFIG.serverUrl}/comment/create/${id}`, {
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

  // 대댓글 달기
  const handleReplyCommentCreate = async (
    replyCommentValue: string,
    commentId: number,
    setIsReplyCommentWriteShow: Function
  ) => {
    try {
      await alimoV1Axios
        .post(`${CONFIG.serverUrl}/comment/create/${id}`, {
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
        .get(`${CONFIG.serverUrl}/notification/read/${id}`)
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
