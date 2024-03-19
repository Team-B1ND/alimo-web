export interface CommentData {
  commentId: number;
  content: string;
  commenterId: number;
  commentor: string;
  createdAt: string;
  profileImage: string | null;
  subComments: [
    {
      commentId: number;
      content: string;
      commenterId: number;
      commentor: string;
      createdAt: string;
      profileImage: string | null;
    }
  ];
}
