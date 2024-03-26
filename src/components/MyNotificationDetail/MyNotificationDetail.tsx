import { LinkItUrl } from "react-linkify-it";
import { ImageData } from "src/types/MyNotificationDetail/Image.interface";
import { FileData } from "src/types/MyNotificationDetail/File.interface";
import { CommentData } from "src/types/CommentList/CommentList.interface";
import useMyNotificationDetail from "src/Hooks/Notification/useMyNotificationDetail";
import SideBar from "src/constants/SideBar/SideBar";
import PostClose from "src/assets/img/PostClose.png";
import defaultProfile from "src/assets/img/profileimg.png";
import Emoji from "src/constants/Emoji/Emoji";
import CommentList from "src/components/MyNotificationDetail/Comment/CommentList";
import FileImage from "src/assets/img/FileImage.svg";
import FileDownLoadIcon from "src/assets/img/FileDownloadIcon.svg";
import Comment from "src/components/MyNotificationDetail/Comment/Comment";
import * as S from "src/components/MyNotificationDetail/style/MyNotificationDetail.style";

const WriteReadDetail = () => {
  const {
    data,
    imageData,
    fileData,
    commentData,
    HandleFileDownLoad,
    isImageError,
    HandleImageError,
    fileSize,
    HandleClose,
    handleCommentCreate,
  } = useMyNotificationDetail();

  return (
    <S.MyNotificationDetailWrap>
      <SideBar />
      <S.MyNotificationDetailBox>
        {/* 공지 글 */}
        <S.MyNotificationDetail>
          <S.Notificationclose>
            {" "}
            <img src={PostClose} alt="공지 닫기" onClick={HandleClose} />{" "}
          </S.Notificationclose>
          <S.MyNotification>
            <S.MyInfoWrap>
              <S.MyProfile
                src={
                  data.profileImage === null
                    ? defaultProfile
                    : data.profileImage
                }
              />
              <S.InfoWrap>
                <S.MyName>{data.name}</S.MyName>
                <S.MyNotificationDate>{data.createdAt}</S.MyNotificationDate>
              </S.InfoWrap>
            </S.MyInfoWrap>
            <S.TitleWrap>
              <S.Title>{data.title}</S.Title>
            </S.TitleWrap>
            <S.ContentWrap>
              <S.Content>
                <LinkItUrl>{data.content}</LinkItUrl>
              </S.Content>
            </S.ContentWrap>
            {imageData &&
              imageData.length > 0 &&
              isImageError &&
              imageData.map((ImageData: ImageData, idx: number) => (
                <S.ImgWrap>
                  <S.Img
                    src={ImageData.fileUrl}
                    dataCnt={imageData.length}
                    imageIndex={idx}
                    onError={HandleImageError}
                  />
                </S.ImgWrap>
              ))}
            {fileData &&
              fileData.length > 0 &&
              fileData.map((FileData: FileData, idx: number) => (
                <S.MyNotificationFileWrap
                  key={FileData.fileUrl}
                  dataCnt={fileData.length}
                  fileIndex={idx}>
                  <S.MyNotificationFile>
                    <S.FileInfoWrap>
                      <S.FileImage src={FileImage}></S.FileImage>
                      <S.FileInfo>
                        <S.FileName>{FileData.fileName}</S.FileName>
                        <S.FileSize>{fileSize[idx]}</S.FileSize>
                      </S.FileInfo>
                    </S.FileInfoWrap>
                    <S.FileDownLoadWrap
                      onClick={() => HandleFileDownLoad(FileData.fileUrl)}>
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
            {commentData &&
              commentData.length > 0 &&
              commentData.map((CommentData: CommentData) => (
                <CommentList
                  key={CommentData.commentId}
                  comment={CommentData}
                />
              ))}
          </S.CommentListBox>
          <Comment handleCommentCreate={handleCommentCreate} />
        </S.CommentListWrap>
        {/* 댓글 */}
      </S.MyNotificationDetailBox>
    </S.MyNotificationDetailWrap>
  );
};

export default WriteReadDetail;
