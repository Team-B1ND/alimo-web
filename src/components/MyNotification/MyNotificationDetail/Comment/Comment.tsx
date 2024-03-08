import ReplyComment from "src/components/MyNotification/MyNotificationDetail/Comment/ReplyComment";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/Comment.style";
import ExampleProfile from "src/assets/img/ExampleProfile.png";
import { useState } from "react";

const Comment = () => {
  const [isReplyShow, setIsReplyShow] = useState<boolean>(false);
  return (
    <S.WriteReadDetailComment>
      <S.MyPostCommentWrap>
        <S.MyPostComment>
          <S.CommentInfoWrap>
            <S.CommentProfile src={ExampleProfile} alt="예시 프로필" />
          </S.CommentInfoWrap>
          <S.CommentContentWrap>
            <S.CommentName>2예진</S.CommentName>
            <S.CommentWrap>
              <S.CommentContent>팀인가여?</S.CommentContent>
              <S.ReplyCommentWrite
                onClick={() => setIsReplyShow((current) => !current)}>
                답글달기
              </S.ReplyCommentWrite>
            </S.CommentWrap>
          </S.CommentContentWrap>
        </S.MyPostComment>
      </S.MyPostCommentWrap>
      {isReplyShow && <ReplyComment />}
    </S.WriteReadDetailComment>
  );
};

export default Comment;
