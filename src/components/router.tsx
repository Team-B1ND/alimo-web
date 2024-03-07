import React from "react";
import GlobalStyles from "src/style/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Profile from "./Profile/profile";
import Setting from "./SettingPage/setting";
import Write from "./Write/Write";
import WriteRead from "./WriteRead/WriteRead";
import WriteReadDetail from "./WriteRead/WriteReadDetail/WriteReadDetail";
import CategoryManage from "./CategoryManage/CategoryManage";
import EditCategory from "./CategoryEdit/EditCategory";
import SideBar from "src/constants/SideBar/SideBar";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/write-read" element={<Write />} />
        <Route path="/read" element={<WriteRead />} />
        <Route path="/main" element={<CategoryManage />} />
        <Route path="/read" element={<WriteReadDetail />} />
        <Route path="sidebar" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
