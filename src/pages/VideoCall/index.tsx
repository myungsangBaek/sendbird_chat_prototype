import React, { useState } from "react";
import * as SendBirdCall from "sendbird-calls";
import VideoCallArea from "../../components/VideoCallArea";
import { APP_ID } from "../../const";

SendBirdCall.init(APP_ID);

function VideoCall() {
  const [inputs, setInputs] = useState([]);

  const connect = () => {};

  return (
    // <!-- Main Container -->
    <div className="container">
      {/* <!-- Connect to Sendbird Calls --> */}
      <div className="card mt-4" style={{ width: "16rem" }} id="connectCard">
        <div className="card-header">Connect to Sendbird Calls</div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Application ID"
            id="APP_ID"
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="User ID"
            id="USER_ID"
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="User Access Token"
            id="ACCESS_TOKEN"
          />
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary" onClick={connect}>
            Connect
          </button>
        </div>
      </div>
      <VideoCallArea />
    </div>
  );
}

export default VideoCall;
