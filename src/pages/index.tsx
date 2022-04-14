import axios from "axios";
import React, { useEffect } from "react";
import { APP_ID, PROFILE_URL } from "../const";

function Main() {
  console.log(APP_ID);

  //user 조회
  const getUser = async () => {
    try {
      const data = await axios.get(
        `https://api-${APP_ID}.sendbird.com/v3/users/`,
        {
          headers: {
            "Content-Type": "application/json; charset=utf8",
            "Api-Token": "6143730db81ea45d82da7a404506ac0ed0bc7ea8",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //user 생성
  const postData = async () => {
    try {
      const param = new URLSearchParams();
      param.append("user_id", "bms1111");
      param.append("nickname", "kakaka");
      param.append("profile_url", PROFILE_URL);
      const data = await axios.post(
        `https://api-${APP_ID}.sendbird.com/v3/users`,
        {
          user_id: "bms1111",
          nickname: "kakaka",
          profile_url: PROFILE_URL,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf8",
            "Api-Token": "6143730db81ea45d82da7a404506ac0ed0bc7ea8",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });
  return (
    <>
      <div onClick={postData}>Main Page</div>
    </>
  );
}

export default Main;
