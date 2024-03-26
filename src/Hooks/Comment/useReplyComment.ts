import { useState, useRef } from "react";

const useReplyComment = () => {
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
  return {
    replyCommentRef,
    replyCommentValue,
    handleChangeValue,
  };
};

export default useReplyComment;
