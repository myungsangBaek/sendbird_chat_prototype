import React from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId="C2B2D423-1D82-4033-9766-C6445C320F17"
        userId="bms1643"
      />
    </div>
  );
}

export default App;
