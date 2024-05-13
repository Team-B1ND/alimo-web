import { CommentListProps } from "src/types/commentList/commentListProps.interface";
import useCommentList from "src/hooks/comment/useCommentList";
import defaultProfile from "src/assets/images/common/ProfileImg.svg";
import ReplyComment from "src/components/mynotificationDetails/replyComment/replyComment";
import * as S from "src/components/mynotificationDetails/commentList/style";

const CommentList = ({ comment, handleReplyCommentCreate }: CommentListProps) => {
  const { ...CommentList } = useCommentList();

  return (
    <S.MyNotificationCommentWrap>
      {/* 댓글 뷰 컴포넌트 */}
      <S.MyNotificationCommentBox>
        <S.MyNotificationComment>
          <S.CommentInfoWrap>
            <S.CommentProfile src={comment.profileImage || defaultProfile} />
            {(comment.subComments.length > 0 || CommentList.isReplyCommentWriteShow) &&
              (CommentList.isReplyCommentShow || CommentList.isReplyCommentWriteShow) && (
                <S.CommentConnectLine></S.CommentConnectLine>
              )}
          </S.CommentInfoWrap>
          <S.CommentContentWrap>
            <S.CommentName>{comment.commentor}</S.CommentName>
            <S.CommentContentBox>
              <S.CommentContent $reply_comment_cnt={comment.subComments.length}>{comment.content}</S.CommentContent>
              <S.ReplyCommentWriteBtn onClick={CommentList.handleReplyCommentWrite}>
                {CommentList.isReplyCommentWriteShow ? "답글 닫기" : "답글 달기"}
              </S.ReplyCommentWriteBtn>
            </S.CommentContentBox>
            {comment.subComments.length > 0 && (
              <S.ReplyCommentShowBtnWrap>
                <S.ReplyCommentShowBtn onClick={() => CommentList.setIsReplyCommentShow((current) => !current)}>
                  {CommentList.isReplyCommentShow ? "답글 닫기" : `답글 ${comment.subComments.length}개 모두 보기`}
                </S.ReplyCommentShowBtn>
              </S.ReplyCommentShowBtnWrap>
            )}
          </S.CommentContentWrap>
        </S.MyNotificationComment>
      </S.MyNotificationCommentBox>
      {/* 댓글 뷰 컴포넌트 */}

      {/* 답글 달기 */}
      {CommentList.isReplyCommentWriteShow && (
        <ReplyComment
          commentData={comment}
          isReplyCommentShow={CommentList.isReplyCommentShow}
          setIsReplyCommentWriteShow={CommentList.setIsReplyCommentWriteShow}
          handleReplyCommentCreate={handleReplyCommentCreate}
        />
      )}
      {/* 답글 달기 */}

      {/* 대댓글 뷰 컴포넌트 */}
      {CommentList.isReplyCommentShow &&
        comment.subComments.map((replyCommentData, idx: number) => (
          <S.MyNotificationReplyCommentWrap key={replyCommentData.commentId}>
            <S.MyNotificationReplyComment>
              <S.ReplyCommentConnectLineWrap>
                <S.ReplyCommentRadiusConnectLine></S.ReplyCommentRadiusConnectLine>
                {comment.subComments.length > idx + 1 && <S.ReplyCommentConnectLine></S.ReplyCommentConnectLine>}
              </S.ReplyCommentConnectLineWrap>
              <S.ReplyCommentInfoWrap>
                <S.ReplyCommentProfile src={replyCommentData.profileImage || defaultProfile} />
              </S.ReplyCommentInfoWrap>
              <S.ReplyCommentContentWrap>
                <S.ReplyCommentName>{replyCommentData.commentor}</S.ReplyCommentName>
                <S.ReplyCommentWrap>
                  <S.ReplyCommentContent>{replyCommentData.content}</S.ReplyCommentContent>
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
