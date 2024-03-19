import { useState } from "react";
import { CommentData } from "src/types/CommentList/Comment.interface";
import baseProfile from "src/assets/img/profileimg.png";
import ReplyComment from "src/components/MyNotification/MyNotificationDetail/Comment/ReplyComment";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/CommentList.style";

interface Props {
  commentData: CommentData;
}

const CommentList = ({ commentData }: Props) => {
  const [isReplyShow, setIsReplyShow] = useState<boolean>(false);
  return (
    <S.MyNotificationDetailComment>
      <S.MyNotificationCommentWrap>
        <S.MyNotificationComment>
          <S.CommentInfoWrap>
            <S.CommentProfile
              src={
                commentData.profileImage === null
                  ? baseProfile
                  : commentData.profileImage
              }
            />
          </S.CommentInfoWrap>
          <S.CommentContentWrap>
            <S.CommentName>{commentData.commentor}</S.CommentName>
            <S.CommentWrap>
              <S.CommentContent>{commentData.content}</S.CommentContent>
              <S.ReplyCommentWrite
                onClick={() => setIsReplyShow((current) => !current)}>
                {isReplyShow ? "답글 닫기" : "답글 달기"}
              </S.ReplyCommentWrite>
            </S.CommentWrap>
          </S.CommentContentWrap>
        </S.MyNotificationComment>
      </S.MyNotificationCommentWrap>
      {isReplyShow && (
        <ReplyComment />
      )}
    </S.MyNotificationDetailComment>
  );
};

export default CommentList;
