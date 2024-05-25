import { Route, Routes } from "react-router-dom";
import Login from "src/pages/auth/page";
import Write from "src/components/write/write";
import MyNotificationPage from "src/pages/myNotifications/page";
import CategoryManage from "src/components/categoryManage/categoryManage";
import PrivateRoute from "src/hooks/private/privateRoute";
import MyNotificationDetailPage from "src/pages/myNotificationDetails/page";
import PersonalInformationPage from "src/pages/Docs/personalInformationPage";
import ServicePolicyPage from "src/pages/Docs/ServicePolicyPage";
import UsageGuidePage from "src/pages/Docs/usageGuidePage";
import IntroducePage from "src/pages/Docs/introducePage";
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
      />
      <Route
        path="/detailed-information/service-policy"
        element={<ServicePolicyPage />}
      />
        <Route
        path="/detailed-information/usage-guide"
        element={<UsageGuidePage />}
      />
        <Route
        path="/detailed-information/introduce"
        element={<IntroducePage />}
      />
    </Routes>
  );
};

export default Router;
