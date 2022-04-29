import axios from "axios";
import React, { useEffect } from "react";
import { APP_ID, PROFILE_URL } from "../const";
import "devextreme/dist/css/dx.light.css";
import DataGrid from "devextreme-react/data-grid";
import Button from "devextreme-react/button";
import { customers } from "../types/data";

function Main() {
  console.log(APP_ID);
  const columns = ["CompanyName", "City", "State", "Phone", "Fax"];
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
      console.log(data.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  //user 생성
  const postData = async () => {
    try {
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

  const sayHelloWorld = () => {
    alert("hello world");
  };

  useEffect(() => {
    getUser();
  });
  return (
    <>
      <div onClick={postData}>Main Page</div>
      <Button text="Click me" onClick={sayHelloWorld}></Button>
      <DataGrid
        dataSource={customers}
        keyExpr="ID"
        defaultColumns={columns}
        showBorders={true}
      />
    </>
  );
}

export default Main;
