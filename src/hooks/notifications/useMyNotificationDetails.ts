import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImageData } from "src/types/myNotificationDetails/Image.interface";
import { FileData } from "src/types/myNotificationDetails/File.interface";
import { FILE_SIZES } from "src/constants/data/fileSize.constants";
import { CommentData } from "src/types/commentList/commentList.interface";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { showToast } from "src/libs/toast/swal";

const useMyNotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [fileData, setFileData] = useState<FileData[]>([]);
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [isCommentSubmit, setIsCommentSubmit] = useState(false);
  const [isReplyCommentSubmit, setIsReplyCommentSubmit] = useState(false);
  const [isImageError, setIsImageError] = useState(true);
  const [fileSize, setFileSize] = useState<string[]>([]);
  const [commentUpdateCount, setCommentUpdateCount] = useState<number>(0);

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
    if (commentValue !== "" && !isCommentSubmit) {
      setIsCommentSubmit(true);
      try {
        await alimoV1Axios
          .post(`comment/create/${id}`, {
            content: commentValue,
            parentId: null,
          })
          .then(() => {
            setIsCommentSubmit(false);
            setCommentValue("");
            setCommentUpdateCount((prev) => prev + 1);
          });
      } catch (error) {
        setIsCommentSubmit(false);
        console.log(error);
      }
    }
  };

  // 닫기 버튼 클릭 -> 내 공지글 보기로 이동
  const HandleClose = () => {
    navigate("/write-read");
  };

  // 대댓글 달기
  const handleReplyCommentCreate = async (
    replyCommentValue: string,
    commentId: number,
    setIsReplyCommentWriteShow: Function
  ) => {
    if (replyCommentValue !== "" && !isReplyCommentSubmit) {
      setIsReplyCommentSubmit(true);
      try {
        await alimoV1Axios
          .post(`comment/create/${id}`, {
            content: replyCommentValue,
            parentId: commentId,
          })
          .then(() => {
            setIsReplyCommentSubmit(false);
            setIsReplyCommentWriteShow(false);
            setCommentUpdateCount((prev) => prev + 1);
          });
      } catch (error) {
        setIsReplyCommentSubmit(false);
        console.log(error);
      }
    }
  };

  // 댓글 삭제
  const handleCommentDelete = async (commentId: number) => {
    Swal.fire({
      title: "정말로 댓글을 삭제하시겠습니까?",
      text: "댓글을 삭제하면 다시 되돌릴 수 없습니다.",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#D9D9D9",
      confirmButtonText: "댓글 삭제",
      cancelButtonText: "취소",
      reverseButtons: false,
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
          await alimoV1Axios
            .delete(`comment/delete/${commentId}`)
            .then(() => {
              setCommentUpdateCount((prev) => prev + 1);
              showToast("success", "댓글 삭제 성공");
            })
        } catch (error) {
          console.log(error)
        }
    }})
  }

  // 대댓글 삭제
  const handleReplyCommentDelete = async (replyCommentId: number) => {
    Swal.fire({
      title: "정말로 대댓글을 삭제하시겠습니까?",
      text: "대댓글을 삭제하면 다시 되돌릴 수 없습니다.",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#D9D9D9",
      confirmButtonText: "대댓글 삭제",
      cancelButtonText: "취소",
      reverseButtons: false,
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
          await alimoV1Axios
            .delete(`comment/deleteSub/${replyCommentId}`)
            .then(() => {
              setCommentUpdateCount((prev) => prev + 1);
              showToast("success", "대댓글 삭제 성공");
            })
        } catch (error) {
          console.log(error)
        }
    }})
  }

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

          for (let i = 0; i < FILE_SIZES.length; i++) {
            if (parseInt(fileSize) < 1024) {
              fileSizeData.push(`${fileSize} ${FILE_SIZES[i]}`);
              break;
            }
            fileSize = `${(parseInt(fileSize) / 1024).toFixed(1)}`;
          }
        });
        setFileSize(fileSizeData);
      });
    };
    NotificationRead();
  }, [id, commentUpdateCount]);
  return {
    data,
    imageData,
    fileData,
    commentData,
    isCommentSubmit,
    isReplyCommentSubmit,
    isImageError,
    fileSize,
    HandleFileDownLoad,
    HandleImageError,
    HandleClose,
    handleCommentCreate,
    handleReplyCommentCreate,
    handleCommentDelete,
    handleReplyCommentDelete,
  };
};

export default useMyNotificationDetail;
