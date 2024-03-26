import { useState } from "react";

const useCommentList = () => {

  const [isReplyCommentShow, setIsReplyCommentShow] = useState<boolean>(false);
  const [isReplyCommentWriteShow, setIsReplyCommentWriteShow] = useState<boolean>(false);

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
  }
};

export default useCommentList;
