import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/customAxios";

const useComment = () => {
  const { id } = useParams();
  const commentRef = useRef(null);
  const [commentValue, setCommentValue] = useState<string>("");

  // 댓글 입력 너비 넘음 -> 높이 변경
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    commentRef: React.RefObject<HTMLTextAreaElement>
  ) => {
    if (commentRef.current) {
      commentRef.current.style.height = "auto";
      commentRef.current.style.height = commentRef.current.scrollHeight + "px";
      setCommentValue(e.target.value);
    }
  };

  // 댓글 달기
  const handleCommentCreate = async () => {
    if (commentValue !== "") {
      try {
        setCommentValue("");
        await alimoV1Axios
          .post(`${CONFIG.serverUrl}/comment/create/${id}`, {
            content: commentValue,
            parentId: null,
          })
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return {
    commentRef,
    commentValue,
    handleChangeValue,
    handleCommentCreate,
  };
};

export default useComment;
