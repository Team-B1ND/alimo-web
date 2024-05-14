import { Route, Routes } from "react-router-dom"; 
import Login from "src/pages/auth/page";
import Write from "src/components/write/write";
import MyNotificationPage from "src/pages/mynotifications/page";
import CategoryManage from "src/components/categoryManage/categoryManage";
import PrivateRoute from "src/hooks/private/privateRoute";
import MyNotificationDetailPage from "src/pages/myNotificationDetails/page";


const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/write" element={<PrivateRoute component={Write} />} />
      <Route path="/write-read" element={<PrivateRoute component={MyNotificationPage} />}/>
      <Route path="/" element={<PrivateRoute component={CategoryManage} />} />
      <Route path="/write-read/:id" element={<PrivateRoute component={MyNotificationDetailPage} />}/>
    </Routes>
  );
};

export default Router;
