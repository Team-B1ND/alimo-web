import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyles from "src/styles/global";
import { Route, Routes } from "react-router-dom";
import Login from "src/pages/auth/page";
import Write from "src/components/write/write";
import MyNotificationPage from "src/pages/myNotifications/page";
import CategoryManage from "src/components/categoryManage/categoryManage";
import PrivateRoute from "src/hooks/private/privateRoute";
import MyNotificationDetailPage from "src/pages/myNotificationDetails/page";
import { StyleSheetManager } from "styled-components";
const Router = () => {
  return (
    <StyleSheetManager>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<PrivateRoute component={Write} />} />
          <Route path="/write-read" element={<PrivateRoute component={MyNotificationPage} />} />
          <Route path="/" element={<PrivateRoute component={CategoryManage} />} />
          <Route path="/write-read/:id" element={<PrivateRoute component={MyNotificationDetailPage} />} />
        </Routes>
      </RecoilRoot>
    </StyleSheetManager>
  );
};
export default Router;
