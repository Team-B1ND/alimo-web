import React from "react";
import GlobalStyles from "src/style/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "src/components/Profile/profile";
import Setting from "src/components/SettingPage/setting";
import Write from "src/components/Write/Write";
import WriteRead from "./components/WriteRead/WriteRead";
import WriteReadDetail from "./components/WriteRead/WriteReadDetail/WriteReadDetail";
import CategoryManage from "./components/CategoryManage/CategoryManage";
import CategoryAdd from "./components/CategoryAdd/CategoryAdd";
import EditCategory from "./components/CategoryManage/EditCategory";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/write" element={<Write />} />
          <Route path="/write-read" element={<WriteRead />} />
          <Route path="/main" element={<CategoryManage />} />
          <Route path="/category-add" element={<CategoryAdd />} />
          <Route path="/category-edit" element={<EditCategory />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
