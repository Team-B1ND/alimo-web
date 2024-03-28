import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyles from "src/style/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Write from "./Write/Write";
import MyNotification from "./MyNotification/MyNotification";
import CategoryManage from "./CategoryManage/CategoryManage";
import PrivateRoute from "src/Hooks/private/PrivateRoute";
import MyNotificationDetail from "src/components/MyNotificationDetail/MyNotificationDetail";
const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<PrivateRoute component={Write} />} />
          <Route path="/write-read" element={<PrivateRoute component={MyNotification} />} />
          <Route path="/" element={<PrivateRoute component={CategoryManage} />} />
          <Route path="/write-read/:id" element={<PrivateRoute component={MyNotificationDetail} />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};
export default Router;
