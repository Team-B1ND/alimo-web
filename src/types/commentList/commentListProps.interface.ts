import { CommentData } from "./commentList.interface";

export interface CommentListProps {
    comment: CommentData;
    isLoding: boolean;
    handleReplyCommentCreate: (
      replyCommentValue: string,
      parentId: number,
      setIsReplyCommentWriteShow: Function,
    ) => Promise<void>;
  }