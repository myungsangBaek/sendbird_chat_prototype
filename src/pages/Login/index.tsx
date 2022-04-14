import axios from "axios";
import React, { useState } from "react";

interface loginData {
  id: string;
  pwd: string;
}

const Login = () => {
  const [input, setInput] = useState<loginData>({
    id: "",
    pwd: "",
  });

  const HandleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const HandleSubmitLogin = async () => {
    try {
      const postData = await axios.post(`http://localhost:3001/login`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input onChange={HandleChangeInput} />
        <input onChange={HandleChangeInput} />
      </div>
      <button style={{ width: "50px", height: "20px" }}>{"Login"}</button>
    </div>
  );
};

export default React.memo(Login);
