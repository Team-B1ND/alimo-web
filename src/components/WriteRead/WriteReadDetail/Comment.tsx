import * as S from "src/components/WriteRead/WriteReadDetail/style/Comment.style";
import ExampleProfile from "src/assets/img/ExampleProfile.png";

const Comment = () => {
    return(
        <S.WriteReadDetailComment>
          <S.MyPostCommentWrap>
            <S.MyPostComment>
              <S.CommentInfoWrap>
                <S.CommentProfile src={ExampleProfile} alt="예시 프로필" />
              </S.CommentInfoWrap>
              <S.CommentContentWrap>
                <S.CommentName>2예진</S.CommentName>
                <S.CommentContent>팀인가여?</S.CommentContent>
                <S.CommentWrap>
                  <S.CommentDate>
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </S.CommentDate>
                  <S.ReplyCommentWrite>답글달기</S.ReplyCommentWrite>
                </S.CommentWrap>
              </S.CommentContentWrap>
            </S.MyPostComment>
          </S.MyPostCommentWrap>
        </S.WriteReadDetailComment>
    )
}

export default Comment