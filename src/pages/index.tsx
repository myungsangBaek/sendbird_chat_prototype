import axios from "axios";
import React, { useEffect } from "react";
import { APP_ID } from "../const";

function Main() {
  console.log(APP_ID);
  const getData = async () => {
    try {
      const data = await axios.get(
        `https://api-${APP_ID}.sendbird.com/v3/users/`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async () => {
    try {
      const param = new URLSearchParams();
      param.append("start_ts", "100000");
      param.append("end_ts", "200000");
      const data = await axios.get(
        `https://api-${APP_ID}.sendbird.com/v3/open_channels/`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <>
      <div onClick={postData}>Main Page</div>
    </>
  );
}

export default Main;
