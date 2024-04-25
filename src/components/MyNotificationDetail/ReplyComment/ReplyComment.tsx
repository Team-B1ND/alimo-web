import { CommentData } from "src/types/CommentList/CommentList.interface";
import useReplyComment from "src/hooks/Comment/useReplyComment";
import useSidebar from "src/hooks/Sidbar/useSiebar";
import defaultProfile from "src/assets/images/common/ProfileImg.svg";
import * as S from "src/components/MyNotificationDetail/ReplyComment/style";

interface Props {
  commentData: CommentData;
  isReplyCommentShow: boolean;
  setIsReplyCommentWriteShow: Function;
  handleReplyCommentCreate: (
    replyCommentValue: string,
    parentId: number,
    setIsReplyCommentWriteShow: Function
  ) => Promise<void>;
}

const ReplyComment = ({
  commentData,
  isReplyCommentShow,
  setIsReplyCommentWriteShow,
  handleReplyCommentCreate }: Props) => {
  const { replyCommentRef, replyCommentValue, handleChangeValue } = useReplyComment();
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
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.shiftKey) {
                  return;
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  handleReplyCommentCreate(
                    replyCommentValue,
                    commentData.commentId,
                    setIsReplyCommentWriteShow
                  );
                }
              }}
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
