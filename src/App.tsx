import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "src/components/Login/Login";
import Main from "src/components/Main/Main/Main";
import Profile from "src/components/Profile/profile";
import Setting from "src/components/SettingPage/setting";
import Write from "src/components/Write/Write";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/setting" element={<Setting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
