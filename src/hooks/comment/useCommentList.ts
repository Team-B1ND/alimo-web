import { useState } from "react";

const useCommentList = () => {
  const [isReplyCommentShow, setIsReplyCommentShow] = useState(false);
  const [isReplyCommentWriteShow, setIsReplyCommentWriteShow] = useState(false);

  // 대댓글 달기 컴포넌트 on/off
  const handleReplyCommentWrite = () => {
    setIsReplyCommentWriteShow((current) => !current);
    if (isReplyCommentShow !== isReplyCommentWriteShow) {
      setIsReplyCommentShow(isReplyCommentShow);
    } else {
      setIsReplyCommentShow((current) => !current);
    }
  };
  return {
    isReplyCommentShow,
    setIsReplyCommentShow,
    isReplyCommentWriteShow,
    setIsReplyCommentWriteShow,
    handleReplyCommentWrite,
  };
};

export default useCommentList;
