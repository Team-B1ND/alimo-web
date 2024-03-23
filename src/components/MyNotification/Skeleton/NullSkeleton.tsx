import * as S from "src/components/MyNotification/style/MyNotification.style"

const NullSkeleton = ()=>{

    return(
        <S.MyPostNotificationWrap>
        <S.NullSkelton>
            작성한 공지글이 없습니다
        </S.NullSkelton>
      </S.MyPostNotificationWrap>
    )
}
export default NullSkeleton;