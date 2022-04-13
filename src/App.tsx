import React from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import { SendBirdProvider, withSendBird, ChannelList } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "./App.css";

export interface IProps {
  id: string;
}

function App({ id }: IProps) {
  return (
    <div className="App">
      <SendBirdApp appId="C2B2D423-1D82-4033-9766-C6445C320F17" userId={id}>
        <SendBirdProvider
          appId="C2B2D423-1D82-4033-9766-C6445C320F17"
          userId={id}
        ></SendBirdProvider>
      </SendBirdApp>
    </div>
  );
}

export default App;
