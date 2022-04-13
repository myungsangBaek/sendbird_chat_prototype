import React from "react";
import { App as SendBirdApp } from "sendbird-uikit";

import "sendbird-uikit/dist/index.css";

import "./App.css";

export interface IProps {
  id: string;
}

function App({ id }: IProps) {
  return (
    <div className="App">
      <SendBirdApp
        appId={"C2B2D423-1D82-4033-9766-C6445C320F17"}
        userId={id}
        nickname={"han"}
        profileUrl={
          "https://dododot.net/_next/image?url=https%3A%2F%2Fdododot-website.s3.ap-northeast-2.amazonaws.com%2Fmember%2Fthumbnail_myungsang.png&w=1920&q=75"
        }
        theme={"dark"}
        // userListQuery={userListQuery}
      ></SendBirdApp>
    </div>
  );
}

export default React.memo(App);
