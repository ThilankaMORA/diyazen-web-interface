import React from "react";
import Config from "../scripts/config";

function TeleopKey() {
  var teleop = null;

  var ros = new window.ROSLIB.Ros({
    url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
  });

  ros.on("connection", function () {
    console.log("Connected to websocket server in Teleopkey.");
  });

  if (teleop == null) {
    var teleop = new window.KEYBOARDTELEOP.Teleop({
      ros: ros,
      topic: "/cmd_vel",
    });
  }

  return (
    <div className="telekey">
      <h6 className="text-white">use joystick or WASD keys on keyboard to move </h6>
    </div>
  );
}

export default TeleopKey;
