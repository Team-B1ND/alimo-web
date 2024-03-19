import React from "react";
import {RecoilRoot} from "recoil";
import GlobalStyles from "src/style/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Write from "./Write/Write";
import MyNotification from "./MyNotification/MyNotification";
import MyNotificationDetail from "./MyNotification/MyNotificationDetail/MyNotificationDetail";
import CategoryManage from "./CategoryManage/CategoryManage";
import CategoryAdd from "./CategoryAdd/CategoryAdd";
import EditCategory from "./CategoryEdit/EditCategory";
import PrivateRoute from "src/Hooks/private/PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/write"element={<PrivateRoute component={Write} />} />
          <Route path="/write-read"element={<PrivateRoute component={WriteRead} />}/>
          <Route path="/" element={<PrivateRoute component={CategoryManage } />} />
          <Route path="/category-add" element={<PrivateRoute component={ CategoryAdd} />} />
          <Route path="/category-edit" element={<PrivateRoute component={ EditCategory} />} />
          <Route path="/write-read/:id" element={<PrivateRoute component={MyNotificationDetail}/> />
        </Routes>
      </RecoilRoot>
      </RecoilRoot>
    </BrowserRouter>
  );
};
export default Router;
