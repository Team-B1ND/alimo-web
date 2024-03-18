import { useRef, useState } from "react";

const useComment = () => {
  const commentRef = useRef(null);
  const [commentValue, setCommentValue] = useState<string>("");

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
  return {
    commentRef,
    commentValue,
    handleChangeValue,
  }
};

export default useComment;
