import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SendBird from "./components/SendBird";

import "./App.css";
import Main from "./pages";
import Login from "./pages/Login";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);
