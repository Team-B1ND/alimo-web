import { CommentData } from "./commentList.interface";

export interface CommentListProps {
    comment: CommentData;
    handleReplyCommentCreate: (
      replyCommentValue: string,
      parentId: number,
      setIsReplyCommentWriteShow: Function,
    ) => Promise<void>;
  }