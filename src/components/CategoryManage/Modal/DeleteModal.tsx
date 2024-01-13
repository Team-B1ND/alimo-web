import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import DeleteImg from "../../../img/Category-Delete.svg";

function DeleteModal() {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const onDelete = () => {
    setShow(false);
  };

  return (
    <div style={{ marginLeft: "7vw", marginBottom: "3vh" }}>
      <Image src={DeleteImg} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ border: "none" }}>
          <Modal.Title>버튼</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ border: "none" }}>
          삭제 하시게되면 해당 카테고리의 공지를 보거나 작성하실 수 없게 됩니다. 그래도 삭제 하시겠습니까?
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button className="Cancle" onClick={handleClose}>
            취소
          </Button>
          <Button className="Delete" onClick={onDelete}>
            삭제하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default DeleteModal;
