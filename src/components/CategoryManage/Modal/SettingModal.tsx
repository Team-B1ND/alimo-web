import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import SettingImg from "../../../img/Category-Setting.svg";

function SettingModal() {
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
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ position: "absolute", marginTop: "1vh", marginLeft: "30vw" }}
    >
      <Image src={SettingImg} onClick={handleShow} />
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Dialog style={{ height: "30vh" }}>
          <Modal.Header style={{ marginTop: "-3vh" }} className="DeleteTitleWrap">
            <Modal.Title>카테고리 설정</Modal.Title>
          </Modal.Header>
          <Modal.Body className="DeleteContentWrap">모달로 할까요 따로 페이지를 만들어야할까요..</Modal.Body>
          <Modal.Footer className="DeleteButtonWrap">
            <Button className="cancle-button" onClick={handleClose}>
              취소
            </Button>
            <Button className="delete-button" onClick={onDelete}>
              구현중
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
export default SettingModal;
