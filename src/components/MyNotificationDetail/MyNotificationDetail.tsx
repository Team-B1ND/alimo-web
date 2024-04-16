import { LinkItUrl } from "react-linkify-it";
import { ImageData } from "src/types/MyNotificationDetail/Image.interface";
import { FileData } from "src/types/MyNotificationDetail/File.interface";
import { CommentData } from "src/types/CommentList/CommentList.interface";
import useMyNotificationDetail from "src/hooks/Notification/useMyNotificationDetail";
import SideBar from "src/components/SideBar/SideBar";
import PostClose from "src/assets/img/PostClose.svg";
import defaultProfile from "src/assets/img/profileimg.png";
import Emoji from "src/constants/Emoji/Emoji";
import CommentList from "src/components/MyNotificationDetail/CommentList/CommentList";
import FileImage from "src/assets/img/FileImage.svg";
import FileDownLoadIcon from "src/assets/img/FileDownloadIcon.svg";
import Comment from "src/components/MyNotificationDetail/Comment/Comment";
import * as S from "src/components/MyNotificationDetail/style";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const MyNotificationDetail = () => {
  const { ...MyNotificationDetail } = useMyNotificationDetail();

  return (
    <S.MyNotificationDetailWrap>
      <SideBar />
      <S.MyNotificationDetailBox>
        {/* 공지 글 */}
        <S.MyNotificationDetail>
          <S.Notificationclose>
            <img src={PostClose} alt="공지 닫기" onClick={MyNotificationDetail.HandleClose} />
          </S.Notificationclose>
          <S.MyNotification>
            <S.MyInfoWrap>
              <S.MyProfile
                src={
                  MyNotificationDetail.data.profileImage === null
                    ? defaultProfile
                    : MyNotificationDetail.data.profileImage
                }
              />
              <S.InfoWrap>
                <S.MyName>{MyNotificationDetail.data.name}</S.MyName>
                <S.MyNotificationDate>
                  {dayjs(MyNotificationDetail.data.createdAt).locale("ko").format("YYYY년 MM월 DD일(ddd) HH:mm")}
                </S.MyNotificationDate>
              </S.InfoWrap>
            </S.MyInfoWrap>
            <S.TitleWrap>
              <S.Title>{MyNotificationDetail.data.title}</S.Title>
            </S.TitleWrap>
            <S.ContentWrap>
              <S.Content>
                <LinkItUrl>{MyNotificationDetail.data.content}</LinkItUrl>
              </S.Content>
            </S.ContentWrap>
            {MyNotificationDetail.imageData &&
              MyNotificationDetail.imageData.length > 0 &&
              MyNotificationDetail.isImageError &&
              MyNotificationDetail.imageData.map((ImageData: ImageData, idx: number) => (
                <S.ImgWrap>
                  <S.Img
                    src={ImageData.fileUrl}
                    dataCnt={MyNotificationDetail.imageData.length}
                    imageIndex={idx}
                    onError={MyNotificationDetail.HandleImageError}
                  />
                </S.ImgWrap>
              ))}
            {MyNotificationDetail.fileData &&
              MyNotificationDetail.fileData.length > 0 &&
              MyNotificationDetail.fileData.map((FileData: FileData, idx: number) => (
                <S.MyNotificationFileWrap
                  key={FileData.fileUrl}
                  dataCnt={MyNotificationDetail.fileData.length}
                  fileIndex={idx}
                >
                  <S.MyNotificationFile>
                    <S.FileInfoWrap>
                      <S.FileImage src={FileImage}></S.FileImage>
                      <S.FileInfo>
                        <S.FileName>{FileData.fileName}</S.FileName>
                        <S.FileSize>{MyNotificationDetail.fileSize[idx]}</S.FileSize>
                      </S.FileInfo>
                    </S.FileInfoWrap>
                    <S.FileDownLoadWrap
                      onClick={() => MyNotificationDetail.HandleFileDownLoad(FileData.fileUrl, FileData.fileName)}
                    >
                      <S.FileDownLoad src={FileDownLoadIcon}></S.FileDownLoad>
                    </S.FileDownLoadWrap>
                  </S.MyNotificationFile>
                </S.MyNotificationFileWrap>
              ))}
            <Emoji />
          </S.MyNotification>
        </S.MyNotificationDetail>
        {/* 공지 글 */}

        {/* 댓글 */}
        <S.CommentListWrap>
          <S.CommentListBox>
            {MyNotificationDetail.commentData &&
              MyNotificationDetail.commentData.length > 0 &&
              MyNotificationDetail.commentData.map((CommentData: CommentData) => (
                <CommentList
                  key={CommentData.commentId}
                  comment={CommentData}
                  handleReplyCommentCreate={MyNotificationDetail.handleReplyCommentCreate}
                />
              ))}
          </S.CommentListBox>
          <Comment handleCommentCreate={MyNotificationDetail.handleCommentCreate} />
        </S.CommentListWrap>
        {/* 댓글 */}
      </S.MyNotificationDetailBox>
    </S.MyNotificationDetailWrap>
  );
};

export default MyNotificationDetail;
