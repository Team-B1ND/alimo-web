import { CommentData } from "../commentList/commentList.interface";

export interface ReplyCommentProps {
  isLoding: boolean;
  commentData: CommentData;
  isReplyCommentShow: boolean;
  setIsReplyCommentWriteShow: Function;
  handleReplyCommentCreate: (
    replyCommentValue: string,
    parentId: number,
    setIsReplyCommentWriteShow: Function
  ) => Promise<void>;
}

export interface ReplyCommentParams {
  e: React.KeyboardEvent,
  commentData: CommentData;
  setIsReplyCommentWriteShow: Function;
  handleReplyCommentCreate: (
    replyCommentValue: string,
    parentId: number,
    setIsReplyCommentWriteShow: Function
  ) => Promise<void>;
}