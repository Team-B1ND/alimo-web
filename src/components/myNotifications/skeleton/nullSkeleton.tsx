import * as S from "src/components/myNotifications/style";

const NullSkeleton = () => {
  return (
    <S.MyPostNotificationWrap>
      <S.NullSkelton>작성한 공지글이 없습니다</S.NullSkelton>
    </S.MyPostNotificationWrap>
  );
};
export default NullSkeleton;