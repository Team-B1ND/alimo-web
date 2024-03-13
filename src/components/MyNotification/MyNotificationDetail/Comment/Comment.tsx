import CommentButtonImg from "src/assets/img/CommentButtonImage.png";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/Comment";

const Comment = () => {
  return (
    <S.CommentWrap>
      <S.Comment>
        <S.CommentInput placeholder="댓글을 남겨보세요."></S.CommentInput>
        <S.CommentButtonWrap>
          <S.CommentButton src={CommentButtonImg}></S.CommentButton>
        </S.CommentButtonWrap>
      </S.Comment>
    </S.CommentWrap>
  );
};

export default Comment;
