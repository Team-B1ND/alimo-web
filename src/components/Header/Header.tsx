import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/Header/style";
import { useRecoilState } from "recoil";
import { NotificationIdData } from "src/store/write/write.store";

const Header = () => {
  const navigate = useNavigate();
  const [notificationId, setNotificationId] = useRecoilState(NotificationIdData);

  const onGetNotificationId = async () => {
    try {
      await alimoV1Axios.post("/notification/create").then((res) => {
        setNotificationId(res.data.data.NotificationId);
        navigate("/write");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.HeaderBarWrap>
      <S.UploadNewNotifyButton>
        <span onClick={onGetNotificationId}>새 공지 작성</span>
      </S.UploadNewNotifyButton>
    </S.HeaderBarWrap>
  );
};

export default Header;
