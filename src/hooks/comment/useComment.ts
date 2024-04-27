import { useRef, useState } from "react";
import { CommentParams } from "src/types/comment/commentProps";

const useComment = () => {
  const commentRef = useRef(null);
  const [commentValue, setCommentValue] = useState<string>("");

  // 댓글 입력 너비 넘음 -> 높이 변경
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    commentRef: React.RefObject<HTMLTextAreaElement>,
  ) => {
    if (commentRef.current) {
      commentRef.current.style.height = "auto";
      commentRef.current.style.height = commentRef.current.scrollHeight + "px";
      setCommentValue(e.target.value);
    }
  };

  const handleKeyDown = ({e, handleCommentCreate}: CommentParams) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleCommentCreate(commentValue, setCommentValue);
    }
  };

  return {
    commentRef,
    commentValue,
    setCommentValue,
    handleChangeValue,
    handleKeyDown,
  };
};

export default useComment;
