import React from "react";

function VideoCallArea() {
  return (
    <div className="card mt-4" style={{ width: "800px" }} id="videoCard">
      <div className="card-header">Sendbird Calls</div>
      <div className="card-body d-flex">
        <div className="col text-center">
          <video
            style={{ width: "300px" }}
            id="local_video_element_id"
            autoPlay
            className="border"
            muted
          />
        </div>
        <div className="col text-center">
          <video
            style={{ width: "300px" }}
            id="remote_video_element_id"
            autoPlay
            className="border"
          />
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center" id="makeCallPanel">
          <button
            className="btn btn-success btn-sm m-1"
            // onClick={makeCall()}
            id="butMakeCall"
          >
            Make Call
          </button>
        </div>
        <div className="d-flex justify-content-center" id="receiveCallPanel">
          <div
            style={{ display: "none" }}
            id="isRinging"
            className="text-danger m-2"
          >
            YOU HAVE A CALL!
          </div>

          <button
            style={{ display: "none" }}
            className="btn btn-primary btn-sm m-1"
            // onClick="acceptCall()"
            id="butAcceptCall"
          >
            Accept Call
          </button>

          <button
            style={{ display: "none" }}
            className="btn btn-danger btn-sm m-1"
            // onClick="endCall()"
            id="butEndCall"
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCallArea;
