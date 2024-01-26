import React from "react";
import Modal from "react-modal";

interface DetailPostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  teacherProfile: string;
  content: string;
  postImage: string;
}

const DetailPostModal: React.FC<DetailPostModalProps> = ({
  isOpen,
  onRequestClose,
  teacherProfile,
  content,
  postImage,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <span className="closeModalIcon" onClick={onRequestClose}>
        x
      </span>
      <div className="DetailNotifyContentWrap">
        <img src={postImage} className="DetailPostImage" alt="포스트 이미지" />
      </div>
      <div className="DetailNotifyInfo">
        <div className="TeacherInfo">
          <img src={teacherProfile} className="DetailTeacherProfile" alt="선생님 프로필" />
          <h1 className="TeacherName">빈윤미</h1>
        </div>
        <span className="DetailContent">{content}</span>
        <span className="DetailMore">...더보기</span>
      </div>
    </Modal>
  );
};

export default DetailPostModal;
