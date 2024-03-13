import { useState, useRef } from "react";
import DummyProfile from "src/assets/img/Profile-Dummy.jpg";
import * as S from "src/components/MyNotification/MyNotificationDetail/Comment/style/ReplyComment.style";

// import axios from "axios";
// import CONFIG from "src/config/config.json";

const ReplyComment = () => {
  const textareaRef = useRef(null);
  const [replyComment, setReplyComment] = useState<string>("");

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    textareaRef: React.RefObject<HTMLTextAreaElement>
  ) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
      setReplyComment(e.target.value);
    }
  };

  // const handleClickRegistration = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${CONFIG.serverUrl}/comment/create/{notificationId}`,
  //       {
  //         content: replyComment,
  //         parentId: 0,
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
            ref={textareaRef}
            value={replyComment}
            onChange={(e) => handleChangeValue(e, textareaRef)}
          />
          <S.ReplyCommentButton /* onClick={handleClickRegistration}*/>
            등록
          </S.ReplyCommentButton>
        </S.ReplyCommentWrap>
      </S.ReplyCommentContentWrap>
    </S.MyPostReplyComment>
  );
};

export default ReplyComment;
