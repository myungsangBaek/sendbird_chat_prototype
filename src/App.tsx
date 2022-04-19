import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SendBird from "./components/SendBird";

import "./App.css";
import Main from "./pages";
import Login from "./pages/Login";
import VideoCall from "./pages/VideoCall";
import Test from "./pages/TestPage";

// export interface IProps {
//   id: string;
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<SendBird />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<VideoCall />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);
