import useComment from "src/hooks/comment/useComment";
import CommentButtonImg from "src/assets/images/notifications/CommentButtonImage.svg";
import { CommentProps } from "src/types/comment/commentProps";
import * as S from "src/components/myNotificationDetails/comment/style";

const Comment = ({ isLoding, handleCommentCreate }: CommentProps) => {
  const { ...Comment } = useComment();

  return (
    <S.CommentWrap>
      <S.Comment>
        <S.CommentInput
          rows={1}
          ref={Comment.commentRef}
          value={Comment.commentValue}
          placeholder="댓글을 남겨보세요."
          onKeyDown={(e) => Comment.handleKeyDown({ e, handleCommentCreate })}
          onChange={(e) => Comment.handleChangeValue(e, Comment.commentRef)}
        ></S.CommentInput>
        <S.CommentButtonWrap onClick={() => handleCommentCreate(Comment.commentValue, Comment.setCommentValue)}>
          {isLoding ? <S.Loding /> : <S.CommentButton src={CommentButtonImg}></S.CommentButton>}
        </S.CommentButtonWrap>
      </S.Comment>
    </S.CommentWrap>
  );
};


export default Comment;