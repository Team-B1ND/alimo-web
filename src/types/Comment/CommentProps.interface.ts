export interface CommentProps {
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
