import { CommentData } from "src/types/CommentList/CommentList.interface";
import useReplyComment from "src/Hooks/Comment/useReplyComment";
import useSidebar from "src/Hooks/Sidbar/useSiebar";
import defaultProfile from "src/assets/img/profileimg.png";
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
    handleReplyCommentCreate,
  } = useReplyComment();

  const {
    Name,
    image,
  } = useSidebar();
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
          <S.ReplyCommentProfile src={commentData.profileImage === null ? defaultProfile : image}/>
        </S.ReplyCommentInfoWrap>
        <S.ReplyCommentContentWrap>
          <S.ReplyCommentName>{Name}</S.ReplyCommentName>
          <S.ReplyCommentContent>
            <S.ReplyCommentInput
              rows={1}
              ref={replyCommentRef}
              value={replyCommentValue}
              onChange={(e) => handleChangeValue(e, replyCommentRef)}
            />
            <S.ReplyCommentButton onClick={() => handleReplyCommentCreate(commentData.commentId)}>
              등록
            </S.ReplyCommentButton>
          </S.ReplyCommentContent>
        </S.ReplyCommentContentWrap>
      </S.ReplyComment>
    </S.ReplyCommentWrap>
  );
};

export default ReplyComment;
