import * as S from "src/components/myNotificationse/style";


const NullSkeleton = () => {
  return (
    <S.MyPostNotificationWrap>
      <S.Skeleton>작성한 공지글이 없습니다</S.Skeleton>
    </S.MyPostNotificationWrap>
  );
};
export default NullSkeleton;
