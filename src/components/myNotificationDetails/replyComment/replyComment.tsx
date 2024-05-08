import { ReplyCommentProps } from "src/types/replyComment/replyCommentProps.interface";
import useReplyComment from "src/hooks/comment/useReplyComment";
import useSidebar from "src/hooks/sidbar/useSiebar";
import defaultProfile from "src/assets/images/common/ProfileImg.svg";
import * as S from "src/components/myNotificationDetails/replyComment/style";

const ReplyComment = ({
  commentData,
  isReplyCommentShow,
  setIsReplyCommentWriteShow,
  handleReplyCommentCreate }: ReplyCommentProps) => {
  const { replyCommentRef, replyCommentValue, handleChangeValue, handleKeydown } = useReplyComment();
  const { Name, image } = useSidebar();

  return (
    <S.ReplyCommentWrap>
      <S.ReplyComment>
        <S.ReplyCommentConnectLineWrap>
          <S.ReplyCommentRadiusConnectLine></S.ReplyCommentRadiusConnectLine>
          {commentData.subComments.length > 0 && isReplyCommentShow && (
            <S.ReplyCommentConnectLine></S.ReplyCommentConnectLine>
          )}
        </S.ReplyCommentConnectLineWrap>
        <S.ReplyCommentInfoWrap>
          <S.ReplyCommentProfile
            src={image || defaultProfile}
          />
        </S.ReplyCommentInfoWrap>
        <S.ReplyCommentContentWrap>
          <S.ReplyCommentName>{Name}</S.ReplyCommentName>
          <S.ReplyCommentContent>
            <S.ReplyCommentInput
              rows={1}
              ref={replyCommentRef}
              value={replyCommentValue}
              onKeyDown={(e) => handleKeydown({e, commentData, setIsReplyCommentWriteShow, handleReplyCommentCreate})}
              onChange={(e) => handleChangeValue(e, replyCommentRef)}
            />
            <S.ReplyCommentButton
              onClick={() =>
                handleReplyCommentCreate(
                  replyCommentValue,
                  commentData.commentId,
                  setIsReplyCommentWriteShow
                )
              }>
              등록
            </S.ReplyCommentButton>
          </S.ReplyCommentContent>
        </S.ReplyCommentContentWrap>
      </S.ReplyComment>
    </S.ReplyCommentWrap>
  );
};

export default ReplyComment;
