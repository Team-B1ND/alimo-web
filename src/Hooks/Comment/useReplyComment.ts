import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/customAxios";

const useReplyComment = () => {
  const { id } = useParams();
  const replyCommentRef = useRef(null);
  const [replyCommentValue, setReplyCommentValue] = useState<string>("");

  // 대댓글 입력 너비 넘음 -> 높이 변경
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    replyCommentRef: React.RefObject<HTMLTextAreaElement>
  ) => {
    if (replyCommentRef.current) {
      replyCommentRef.current.style.height = "auto";
      replyCommentRef.current.style.height =
        replyCommentRef.current.scrollHeight + "px";
      setReplyCommentValue(e.target.value);
    }
  };

  // 대댓글 달기
  const handleReplyCommentCreate = async (commentId: number) => {
    try {
      await alimoV1Axios.post(`${CONFIG.serverUrl}/comment/create/${id}`,
          {
            content: replyCommentValue,
            parentId: commentId,
          },
        )
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    replyCommentRef,
    replyCommentValue,
    handleChangeValue,
    handleReplyCommentCreate,
  };
};

export default useReplyComment;
