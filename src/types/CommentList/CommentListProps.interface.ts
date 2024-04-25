import { CommentData } from "./CommentList.interface";

export interface CommentListProps {
    comment: CommentData;
    handleReplyCommentCreate: (
      replyCommentValue: string,
      parentId: number,
      setIsReplyCommentWriteShow: Function,
    ) => Promise<void>;
  }