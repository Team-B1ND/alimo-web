import React, { useEffect, useState } from "react";
import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotifyDummy from "src/components/WriteRead/MyPostNotify";
import * as S from "src/components/WriteRead/style/WriteRead.style";
import CONFIG from "src/config/config.json";
import axios from "axios";

const MyWriteView = () => {
  // const accesToken = localStorage.getItem("accestoken");
  // useEffect(() => {
  //   const NotificationLoad = async () => {
  //     try {
  //       await axios
  //         .get(`${CONFIG.serverUrl}/notification/load`, {
  //           params: { page: 0, size: 0 },
  //           headers: {
  //             Authorization: `Bearer ${accesToken}`,
  //           },
  //         })
  //         .then((result) => {
  //           console.log(result.data);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   NotificationLoad();
  // }, []);

  return (
    <S.WriteRead>
      <SideBar />
      <S.WriteReadView>
        <S.WriteReadWrap>
          <MyPostNotifyDummy />
        </S.WriteReadWrap>
      </S.WriteReadView>
    </S.WriteRead>
  );
};

export default MyWriteView;
