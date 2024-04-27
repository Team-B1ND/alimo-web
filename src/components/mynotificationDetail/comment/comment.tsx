import useComment from "src/hooks/comment/useComment";
import CommentButtonImg from "src/assets/images/notification/CommentButtonImage.svg";
import { CommentProps } from "src/types/comment/sdsdsdsd";
import * as S from "src/components/mynotificationDetail/comment/style";

const Comment = ({ handleCommentCreate }: CommentProps) => {
  const { ...Comment } = useComment();

  return (
    <S.CommentWrap>
      <S.Comment>
        <S.CommentInput
          rows={1}
          ref={Comment.commentRef}
          value={Comment.commentValue}
          placeholder="댓글을 남겨보세요."
          onKeyDown={(e) => Comment.handleKeyDown({e, handleCommentCreate})}
          onChange={(e) => Comment.handleChangeValue(e, Comment.commentRef)}></S.CommentInput>
        <S.CommentButtonWrap
          onClick={() => handleCommentCreate(Comment.commentValue, Comment.setCommentValue)}>
          <S.CommentButton src={CommentButtonImg}></S.CommentButton>
        </S.CommentButtonWrap>
      </S.Comment>
    </S.CommentWrap>
  );
};

export default Comment;
