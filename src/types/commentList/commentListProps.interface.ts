import { CommentData } from "./commentList.interface";

export interface CommentListProps {
    comment: CommentData;
    isLoding: boolean;
    handleCommentDelete: (commentId: number) => void;
    handleReplyCommentDelete: (replyCommentId: number) => void;
    handleReplyCommentCreate: (
      replyCommentValue: string,
      parentId: number,
      setIsReplyCommentWriteShow: Function,
    ) => Promise<void>;
  }