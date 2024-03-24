import { useState } from "react";

const useCommentList = () => {

  const [isReplyShow, setIsReplyShow] = useState<boolean>(false);
  const [isReplyWriteShow, setIsReplyWriteShow] = useState<boolean>(false);

  const handleReplyCommentCreate = () => {
    setIsReplyWriteShow((current) => !current);
    if (isReplyShow !== isReplyWriteShow) {
      setIsReplyShow(isReplyShow);
    } else {
      setIsReplyShow((current) => !current);
    }
  };
  return {
    isReplyShow,
    setIsReplyShow,
    isReplyWriteShow,
    handleReplyCommentCreate,
  }
};

export default useCommentList;
