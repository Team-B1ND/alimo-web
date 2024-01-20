import React from "react";
import GlobalStyles from "src/style/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "src/components/Main/Main";
import Profile from "src/components/Profile/profile";
import Setting from "src/components/SettingPage/setting";
import Write from "src/components/Write/Write";
import WriteRead from "./components/WriteRead/WriteRead";
import CategoryManage from "./components/CategoryManage/CategoryManage";
import CategoryAdd from "./components/CategoryAdd/CategoryAdd";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/write" element={<Write />} />
          <Route path="/write-read" element={<WriteRead />} />
          <Route path="/category-manage" element={<CategoryManage />} />
          <Route path="/category-add" element={<CategoryAdd />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
