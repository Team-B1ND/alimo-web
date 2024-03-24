import { CommentData } from "src/types/CommentList/CommentList.interface";
import useReplyComment from "src/Hooks/Comment/useReplyComment";
import useSidebar from "src/Hooks/Sidbar/useSiebar";
import baseProfile from "src/assets/img/profileimg.png";
import * as S from "src/components/MyNotificationDetail/Comment/style/ReplyComment.style";

interface Props {
  commentData: CommentData;
  isReplyCommentShow: boolean;
}

const ReplyComment = ({ commentData, isReplyCommentShow }: Props) => {
  const {
    replyCommentRef,
    replyCommentValue,
    handleChangeValue,
    handleClickReplyComment,
  } = useReplyComment();

  const {
    Name,
    image,
  } = useSidebar();
  return (
    <S.MyPostReplyCommentWrap>
      <S.MyPostReplyComment>
        <S.ReplyCommentLineWrap>
          <S.ReplyCommentRadiusLine></S.ReplyCommentRadiusLine>
          {commentData.subComments.length > 0 && isReplyCommentShow && (
            <S.ReplyCommentLine></S.ReplyCommentLine>
          )}
        </S.ReplyCommentLineWrap>
        <S.ReplyCommentInfoWrap>
          <S.ReplyCommentProfile
            src={
              commentData.profileImage === null
                ? baseProfile
                : image
            }
            alt="예시 프로필"
          />
        </S.ReplyCommentInfoWrap>
        <S.ReplyCommentContentWrap>
          <S.ReplyCommentName>{Name}</S.ReplyCommentName>
          <S.ReplyCommentWrap>
            <S.ReplyCommentInput
              rows={1}
              ref={replyCommentRef}
              value={replyCommentValue}
              onChange={(e) => handleChangeValue(e, replyCommentRef)}
            />
            <S.ReplyCommentButton
              onClick={() => handleClickReplyComment(commentData.commentId)}>
              등록
            </S.ReplyCommentButton>
          </S.ReplyCommentWrap>
        </S.ReplyCommentContentWrap>
      </S.MyPostReplyComment>
    </S.MyPostReplyCommentWrap>
  );
};

export default ReplyComment;
