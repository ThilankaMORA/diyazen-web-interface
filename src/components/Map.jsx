import React, { useEffect, useRef } from "react";
import Config from "../scripts/config";

function Map() {
  var viewer = null;
  useEffect(() => {
    var ros = new window.ROSLIB.Ros({
      url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
    });

    ros.on("connection", function () {
      console.log("Connected to websocket server in Map.");
    });

    var viewer = new window.ROS2D.Viewer({
      divID: "nav_div",
      width: 500,
      height: 380,
    });

    var navClient = new window.NAV2D.OccupancyGridClientNav({
      ros: ros,
      rootObject: viewer.scene,
      viewer: viewer,
      serverName: "/move_base",
      withOrientation: true,
    });
  }, [viewer]);

  return (
    <div>
      <div id="nav_div"></div>
    </div>
  );
}

export default Map;
