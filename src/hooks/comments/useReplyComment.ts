import { useState, useRef } from "react";
import { ReplyCommentParams } from "src/types/ReplyComment/ReplyCommentProps.interface";

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

  const handleKeydown = ({
    e,
    commentData,
    setIsReplyCommentWriteShow,
    handleReplyCommentCreate,
  }: ReplyCommentParams) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleReplyCommentCreate(
        replyCommentValue,
        commentData.commentId,
        setIsReplyCommentWriteShow
      );
    }
  };
  return {
    replyCommentRef,
    replyCommentValue,
    handleChangeValue,
    handleKeydown,
  };
};

export default useReplyComment;
