import useReplyComment from "src/Hooks/Comment/useReplyComment";
import DummyProfile from "src/assets/img/Profile-Dummy.jpg";
import * as S from "src/components/MyNotificationDetail/Comment/style/ReplyComment.style";

interface Props {
  commentId: number;
}

const ReplyComment = ({ commentId }: Props) => {
  const {
    replyCommentRef,
    replyCommentValue,
    handleChangeValue,
    handleClickReplyComment,
  } = useReplyComment();
  return (
    <S.MyPostReplyComment>
      <S.ReplyCommentInfoWrap>
        <S.ReplyCommentProfile src={DummyProfile} alt="예시 프로필" />
      </S.ReplyCommentInfoWrap>
      <S.ReplyCommentContentWrap>
        <S.ReplyCommentName>2진주</S.ReplyCommentName>
        <S.ReplyCommentWrap>
          <S.ReplyCommentInput
            rows={1}
            ref={replyCommentRef}
            value={replyCommentValue}
            onChange={(e) => handleChangeValue(e, replyCommentRef)}
          />
          <S.ReplyCommentButton
            onClick={() => handleClickReplyComment(commentId)}
          >
            등록
          </S.ReplyCommentButton>
        </S.ReplyCommentWrap>
      </S.ReplyCommentContentWrap>
    </S.MyPostReplyComment>
  );
};

export default ReplyComment;
