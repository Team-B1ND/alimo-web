export interface CommentProps {
  isLoding: boolean;
  handleCommentCreate: (
    commentValue: string,
    setCommentValue: Function
  ) => Promise<void>;
}

export interface CommentParams {
  e: React.KeyboardEvent;
  handleCommentCreate: (
    commentValue: string,
    setCommentValue: Function
  ) => Promise<void>;
}
