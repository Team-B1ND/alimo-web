import { useRef, useState } from "react";
import CommentButtonImg from "src/assets/img/CommentButtonImage.png";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/Comment";

const Comment = () => {
  const commentRef = useRef(null);
  const [commentValue, setCommentValue] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  return (
    <S.CommentWrap>
      <S.Comment>
        <S.CommentInput
          ref={commentRef}
          value={commentValue}
          placeholder="댓글을 남겨보세요."
          onChange={handleChangeValue}></S.CommentInput>
        <S.CommentButtonWrap>
          <S.CommentButton src={CommentButtonImg}></S.CommentButton>
        </S.CommentButtonWrap>
      </S.Comment>
    </S.CommentWrap>
  );
};

export default Comment;
