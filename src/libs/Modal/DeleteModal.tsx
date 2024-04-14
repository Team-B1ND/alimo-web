import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Category.style/Modal.style/DeleteModal.css";
import { Image } from "react-bootstrap";
import DeleteImg from "../../img/Category-Delete.svg";
import { showToast } from "../Toast/Swal";

interface DeleteModalProps {
  onDeleteCategory: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onDeleteCategory }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const onDelete = () => {
    setShow(false);
    onDeleteCategory();
    showToast("success", "성공적으로 삭제되었습니다.");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ position: "absolute", marginTop: "1vh", marginLeft: "35vw", cursor: "pointer" }}
    >
      <Image src={DeleteImg} onClick={handleShow} />
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Dialog style={{ height: "30vh" }}>
          <Modal.Header style={{ marginTop: "-3vh" }} className="DeleteTitleWrap">
            <Modal.Title>정말 카테고리를 삭제하시겠습니까?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="DeleteContentWrap">
            삭제 하시게되면 해당 카테고리의 공지를 보거나 작성하실 수 없게 됩니다. 그래도 삭제 하시겠습니까?
          </Modal.Body>
          <Modal.Footer className="DeleteButtonWrap">
            <Button className="cancle-button" onClick={handleClose}>
              취소
            </Button>
            <Button className="delete-button" onClick={onDelete}>
              삭제하기
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default DeleteModal;
