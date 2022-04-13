import React from "react";
import { App as SendBirdApp, OpenChannel } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "./App.css";
import { APP_ID, USER_ID, NICKNAME, THEME, ACCESS_TOKEN } from "./const";

export interface IProps {
  id: string;
}

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={APP_ID}
        accessToken={ACCESS_TOKEN}
        userId={USER_ID}
        nickname={NICKNAME}
        profileUrl={
          "https://dododot.net/_next/image?url=https%3A%2F%2Fdododot-website.s3.ap-northeast-2.amazonaws.com%2Fmember%2Fthumbnail_myungsang.png&w=1920&q=75"
        }
        theme={THEME}
        allowProfileEdit={true}
        showSearchIcon={true}
        useMessageGrouping={true}
        useReaction={true}
      >
        <OpenChannel channelUrl="www.naver.com" fetchingParticipants={true} />
      </SendBirdApp>
    </div>
  );
}

export default React.memo(App);
