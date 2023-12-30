import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "src/components/Main/Main/Main";
import Profile from "./components/Profile/Profile/profile";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element /> {/* 여기는 로그인 */}
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
