import * as S from "src/components/myNotifications/style";

const ErrorSkeleton = () => {
  return (
    <S.MyPostNotificationWrap>
      <S.Skeleton>작성한 공지글 불러오기를 실패했습니다.</S.Skeleton>
    </S.MyPostNotificationWrap>
  );
};

export default ErrorSkeleton;
