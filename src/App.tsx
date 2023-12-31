import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "src/components/Main/Main";
import Profile from "src/components/Profile/Profile";
import Setting from "src/components/SettingPage/Setting";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element /> {/* 여기는 로그인 */}
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/setting" element={<Setting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;