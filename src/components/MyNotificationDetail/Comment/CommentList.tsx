import { useState } from "react";
import { CommentData } from "src/types/CommentList/CommentList.interface";
import baseProfile from "src/assets/img/profileimg.png";
import ReplyComment from "src/components/MyNotificationDetail/Comment/ReplyComment";
import * as S from "src/components/MyNotificationDetail/Comment/style/CommentList.style";

interface Props {
  commentData: CommentData;
}

const CommentList = ({ commentData }: Props) => {
  const [isReplyShow, setIsReplyShow] = useState<boolean>(false);
  const [isReplyWriteShow, setIsReplyWriteShow] = useState<boolean>(false);
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
            {(commentData.subComments.length > 0 || isReplyWriteShow) &&
              (isReplyShow || isReplyWriteShow) && (
                <S.CommentLine></S.CommentLine>
              )}
          </S.CommentInfoWrap>
          <S.CommentContentWrap>
            <S.CommentName>{commentData.commentor}</S.CommentName>
            <S.CommentWrap>
              <S.CommentContent
                replyCommentCnt={commentData.subComments.length}>
                {commentData.content}
              </S.CommentContent>
              <S.ReplyCommentWrite
                onClick={() => setIsReplyWriteShow((current) => !current)}>
                {isReplyWriteShow ? "답글 닫기" : "답글 달기"}
              </S.ReplyCommentWrite>
            </S.CommentWrap>
            {commentData.subComments.length > 0 && (
              <S.ReplyCommentShowWrap>
                <S.ReplyCommentShow
                  onClick={() => setIsReplyShow((current) => !current)}>{`${
                  isReplyShow
                    ? "답글 닫기"
                    : `답글 ${commentData.subComments.length}개 모두 보기`
                }`}</S.ReplyCommentShow>
              </S.ReplyCommentShowWrap>
            )}
          </S.CommentContentWrap>
        </S.MyNotificationComment>
      </S.MyNotificationCommentWrap>
      {isReplyWriteShow && (
        <ReplyComment
          commentId={commentData.commentId}
          replyCommentCnt={commentData.subComments.length}
          isReplyCommentShow={isReplyShow}
        />
      )}
      {isReplyShow &&
        commentData.subComments.map((replyCommentData, idx: number) => (
          <S.MyNotificationReplyCommentWrap key={replyCommentData.commentId}>
            <S.MyNotificationReplyComment>
              <S.ReplyCommentLineWrap>
                <S.ReplyCommentRadiusLine></S.ReplyCommentRadiusLine>
                {commentData.subComments.length > idx + 1 && (
                  <S.ReplyCommentLine></S.ReplyCommentLine>
                )}
              </S.ReplyCommentLineWrap>
              <S.ReplyCommentInfoWrap>
                <S.ReplyCommentProfile
                  src={
                    replyCommentData.profileImage === null
                      ? baseProfile
                      : replyCommentData.profileImage
                  }
                />
              </S.ReplyCommentInfoWrap>
              <S.ReplyCommentContentWrap>
                <S.ReplyCommentName>
                  {replyCommentData.commentor}
                </S.ReplyCommentName>
                <S.ReplyCommentWrap>
                  <S.ReplyCommentContent>
                    {replyCommentData.content}
                  </S.ReplyCommentContent>
                </S.ReplyCommentWrap>
              </S.ReplyCommentContentWrap>
            </S.MyNotificationReplyComment>
          </S.MyNotificationReplyCommentWrap>
        ))}
    </S.MyNotificationDetailComment>
  );
};

export default CommentList;
