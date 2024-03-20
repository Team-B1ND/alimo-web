import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";

const useReplyComment = () => {
  const { id } = useParams();
  const replyCommentRef = useRef(null);
  const [replyCommentValue, setReplyCommentValue] = useState<string>("");

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

  const handleClickReplyComment = async (commentId: number) => {
    try {
      await axios
        .post(
          `${CONFIG.serverUrl}/comment/create/${id}`,
          {
            content: replyCommentValue,
            parentId: commentId,
          },
          {
            headers: {
              Authorization: `Bearer ${CONFIG.accessToken}`,
            },
          }
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
    handleClickReplyComment,
  };
};

export default useReplyComment;
