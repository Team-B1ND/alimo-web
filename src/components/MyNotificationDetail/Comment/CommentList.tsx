import { CommentData } from "src/types/CommentList/CommentList.interface";
import useCommentList from "src/Hooks/Comment/useCommentList";
import defaultProfile from "src/assets/img/profileimg.png";
import ReplyComment from "src/components/MyNotificationDetail/Comment/ReplyComment";
import * as S from "src/components/MyNotificationDetail/Comment/style/CommentList.style";

interface Props {
  comment: CommentData;
}

const CommentList = ({ comment }: Props) => {
  const {
    isReplyCommentShow,
    setIsReplyCommentShow,
    isReplyCommentWriteShow,
    handleReplyCommentWrite,
  } = useCommentList();
  return (
    <S.MyNotificationCommentWrap>
      {/* 댓글 뷰 컴포넌트 */}
      <S.MyNotificationCommentBox>
        <S.MyNotificationComment>
          <S.CommentInfoWrap>
            <S.CommentProfile src={comment.profileImage === null ? defaultProfile: comment.profileImage}/>
            {(comment.subComments.length > 0 || isReplyCommentWriteShow) &&
              (isReplyCommentShow || isReplyCommentWriteShow) && (
                <S.CommentConnectLine></S.CommentConnectLine>
              )}
          </S.CommentInfoWrap>
          <S.CommentContentWrap>
            <S.CommentName>{comment.commentor}</S.CommentName>
            <S.CommentContentBox>
              <S.CommentContent replyCommentCnt={comment.subComments.length}>
                {comment.content}
              </S.CommentContent>
              <S.ReplyCommentWriteBtn onClick={handleReplyCommentWrite}>
                {isReplyCommentWriteShow ? "답글 닫기" : "답글 달기"}
              </S.ReplyCommentWriteBtn>
            </S.CommentContentBox>
            {comment.subComments.length > 0 && (
              <S.ReplyCommentShowBtnWrap>
                <S.ReplyCommentShowBtn onClick={() => setIsReplyCommentShow((current) => !current)}>
                  {isReplyCommentShow ? "답글 닫기" : `답글 ${comment.subComments.length}개 모두 보기`}
                </S.ReplyCommentShowBtn>
              </S.ReplyCommentShowBtnWrap>
            )}
          </S.CommentContentWrap>
        </S.MyNotificationComment>
      </S.MyNotificationCommentBox>
      {/* 댓글 뷰 컴포넌트 */}

      {/* 답글 달기 */}
      {isReplyCommentWriteShow && (
        <ReplyComment commentData={comment} isReplyCommentShow={isReplyCommentShow} />
      )}
      {/* 답글 달기 */}

      {/* 대댓글 뷰 컴포넌트 */}
      {isReplyCommentShow &&
        comment.subComments.map((replyCommentData, idx: number) => (
          <S.MyNotificationReplyCommentWrap key={replyCommentData.commentId}>
            <S.MyNotificationReplyComment>
              <S.ReplyCommentConnectLineWrap>
                <S.ReplyCommentRadiusConnectLine></S.ReplyCommentRadiusConnectLine>
                {comment.subComments.length > idx + 1 && (
                  <S.ReplyCommentConnectLine></S.ReplyCommentConnectLine>
                )}
              </S.ReplyCommentConnectLineWrap>
              <S.ReplyCommentInfoWrap>
                <S.ReplyCommentProfile
                  src={
                    replyCommentData.profileImage === null
                      ? defaultProfile
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
      {/* 대댓글 뷰 컴포넌트 */}
    </S.MyNotificationCommentWrap>
  );
};

export default CommentList;
