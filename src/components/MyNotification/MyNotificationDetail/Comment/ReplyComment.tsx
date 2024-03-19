import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import DummyProfile from "src/assets/img/Profile-Dummy.jpg";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/ReplyComment.style";
import axios from "axios";
import CONFIG from "src/config/config.json";

interface Props {
  commentId: number;
}

const ReplyComment = ({ commentId }: Props) => {
  const { id } = useParams();
  const replyCommentRef = useRef(null);
  const [replyCommentValue, setReplyCommentValue] = useState<string>("");

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    replyCommentRef: React.RefObject<HTMLTextAreaElement>
  ) => {
    if (replyCommentRef.current) {
      replyCommentRef.current.style.height = "auto";
      replyCommentRef.current.style.height =
        replyCommentRef.current.scrollHeight + "px";
      setReplyCommentValue(e.target.value);
    }
  };

  const handleClickReplyComment = async () => {
    try {
      await axios
        .post(
          `${CONFIG.serverUrl}/comment/create/${id}`,
          {
            content: replyCommentValue,
            parentId: commentId,
          },
          {
            headers: {
              Authorization: `Bearer ${CONFIG.accessToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
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
          <S.ReplyCommentButton onClick={handleClickReplyComment}>
            등록
          </S.ReplyCommentButton>
        </S.ReplyCommentWrap>
      </S.ReplyCommentContentWrap>
    </S.MyPostReplyComment>
  );
};

export default ReplyComment;
