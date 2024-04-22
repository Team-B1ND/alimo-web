import useComment from "src/hooks/Comment/useComment";
import CommentButtonImg from "src/assets/img/CommentButtonImage.svg";
import * as S from "src/components/MyNotificationDetail/Comment/style";
import { handleCommentProps } from "@src/type/CommentList/comment.type";

const Comment = ({ handleCommentCreate }: handleCommentProps) => {
  const { commentRef, commentValue, setCommentValue, handleChangeValue } =
    useComment();
  return (
    <S.CommentWrap>
      <S.Comment>
        <S.CommentInput
          rows={1}
          ref={commentRef}
          value={commentValue}
          placeholder="댓글을 남겨보세요."
          onChange={(e) => handleChangeValue(e, commentRef)}
        ></S.CommentInput>
        <S.CommentButtonWrap
          onClick={() => handleCommentCreate(commentValue, setCommentValue)}
        >
          <S.CommentButton src={CommentButtonImg}></S.CommentButton>
        </S.CommentButtonWrap>
      </S.Comment>
    </S.CommentWrap>
  );
};

export default Comment;
