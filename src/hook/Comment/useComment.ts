import { useRef, useState } from "react";

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

  return {
    commentRef,
    commentValue,
    setCommentValue,
    handleChangeValue,
  };
};

export default useComment;
