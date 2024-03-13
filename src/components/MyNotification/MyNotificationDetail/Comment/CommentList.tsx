import { useState } from "react";
import ExampleProfile from "src/assets/img/ExampleProfile.png";
import Comment from "src/components/MyNotification/MyNotificationDetail/Comment/Comment";
import ReplyComment from "src/components/MyNotification/MyNotificationDetail/Comment/ReplyComment";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/CommentList.style";

const CommentList = () => {
  const [isReplyShow, setIsReplyShow] = useState<boolean>(false);
  return (
    <S.MyNotificationDetailCommentWrap>
      <S.MyNotificationDetailComment>
        <S.MyNotificationCommentWrap>
          <S.MyNotificationComment>
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
          </S.MyNotificationComment>
        </S.MyNotificationCommentWrap>
        {isReplyShow && <ReplyComment />}
      </S.MyNotificationDetailComment>
      <Comment />
    </S.MyNotificationDetailCommentWrap>
  );
};

export default CommentList;
