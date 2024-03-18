import { LinkItUrl } from "react-linkify-it";
import SideBar from "src/constants/SideBar/SideBar";
import Emoji from "src/constants/Emoji/Emoji";
import CommentList from "src/components/MyNotification/MyNotificationDetail/Comment/CommentList";
import useMyNotificationDetail from "src/Hooks/Notification/useMyNotificationDetail";
import FileImage from "src/assets/img/FileImage.svg";
import FileDownLoadIcon from "src/assets/img/FileDownloadIcon.svg";
import * as S from "src/components/MyNotification/MyNotificationDetail/style/MyNotificationDetail.style";

const WriteReadDetail = () => {
  const { notificationDetailData, isImageError, handleImageError, fileSize } =
    useMyNotificationDetail();

  return (
    <S.MyNotificationDetailWrap>
      <SideBar />
      <S.MyNotificationDetailBox>
        <S.MyNotificationDetail>
          <S.MyNotification>
            <S.MyNotificationInfoWrap>
              <S.MyProfile src={notificationDetailData.profileImage} />
              <S.MyInfoWrap>
                <S.MyName>{notificationDetailData.name}</S.MyName>
                <S.MyNotificationDate>
                  {notificationDetailData.createdAt}
                </S.MyNotificationDate>
              </S.MyInfoWrap>
            </S.MyNotificationInfoWrap>
            <S.MyNotificationTitleWrap>
              <S.MyNotificationTitle>
                {notificationDetailData.title}
              </S.MyNotificationTitle>
            </S.MyNotificationTitleWrap>
            <S.MyNotificationContentWrap>
              <S.MyNotificationContent>
                <LinkItUrl>{notificationDetailData.content}</LinkItUrl>
              </S.MyNotificationContent>
            </S.MyNotificationContentWrap>
            {notificationDetailData.files &&
              notificationDetailData.files.length > 0 && (
                <S.MyNotificationFileWrap>
                  <S.MyNotificationFile>
                    <S.MyNotificationFileInfo>
                      <S.MyNotificationFileImage
                        src={FileImage}></S.MyNotificationFileImage>
                      <S.MyNotificationFileText>
                        {notificationDetailData.files.length > 1 && (
                          <S.MyNotificationFileCount>
                            총 {notificationDetailData.files.length}개 파일
                          </S.MyNotificationFileCount>
                        )}
                        <S.MyNotificationFileName>
                          {notificationDetailData.files[0].fileName}
                        </S.MyNotificationFileName>
                        {notificationDetailData.files.length === 1 && (
                          <S.MyNotificationFileSize>
                            {fileSize}
                          </S.MyNotificationFileSize>
                        )}
                      </S.MyNotificationFileText>
                    </S.MyNotificationFileInfo>
                    <S.MyNotificationFileDownLoadWrap>
                      <S.MyNotificationFileDownLoad
                        src={FileDownLoadIcon}></S.MyNotificationFileDownLoad>
                    </S.MyNotificationFileDownLoadWrap>
                  </S.MyNotificationFile>
                </S.MyNotificationFileWrap>
              )}
            <S.MyNotificationImgWrap>
              {notificationDetailData.images &&
                notificationDetailData.images.length > 0 &&
                isImageError && (
                  <S.MyNotificationImg
                    src={notificationDetailData.images[0].fileUrl}
                    onError={handleImageError}
                  />
                )}
            </S.MyNotificationImgWrap>
            <Emoji />
          </S.MyNotification>
        </S.MyNotificationDetail>
        <CommentList />
      </S.MyNotificationDetailBox>
    </S.MyNotificationDetailWrap>
  );
};

export default WriteReadDetail;
