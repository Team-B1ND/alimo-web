import { Route, Routes } from "react-router-dom";
import Login from "src/pages/auth/page";
import Write from "src/components/write/write";
import MyNotificationPage from "src/pages/myNotifications/page";
import CategoryManage from "src/components/categoryManage/categoryManage";
import PrivateRoute from "src/hooks/private/privateRoute";
import MyNotificationDetailPage from "src/pages/myNotificationDetails/page";
import PersonalInformationPage from "src/pages/Docs/personalInformationPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/write" element={<Write />} />
        <Route path="/write-read" element={<MyNotificationPage />} />
        <Route path="/" element={<CategoryManage />} />
        <Route path="/write-read/:id" element={<MyNotificationDetailPage />} />
      </Route>
      <Route
        path="/detailed-information/personal-information"
        element={<PersonalInformationPage />}
      ></Route>
    </Routes>
  );
};

export default Router;
