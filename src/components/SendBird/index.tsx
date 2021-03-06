import React, { useEffect } from "react";

import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import {
  APP_ID,
  USER_ID,
  NICKNAME,
  THEME,
  ACCESS_TOKEN,
  PROFILE_URL,
} from "../../const";
import { USER_INFO } from "../../types";

// interface IProps {
//   user: USER_INFO[];
// }

function SendBird() {
  console.log(ACCESS_TOKEN);

  return (
    <SendBirdApp
      appId={APP_ID}
      accessToken={ACCESS_TOKEN}
      userId={USER_ID}
      nickname={NICKNAME}
      profileUrl={PROFILE_URL}
      allowProfileEdit={true}
      showSearchIcon={true}
      useMessageGrouping={true}
      useReaction={true}
    ></SendBirdApp>
  );
}

export default React.memo(SendBird);
