import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Config from "../scripts/config";

function Connection() {
  const [connected, Setconnected] = useState(false);
  
  useEffect(() => {
    var ros = new window.ROSLIB.Ros({
      url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
    });
  
    ros.on("connection", function () {
      console.log("Connected to websocket server.");
      Setconnected(true);
    });
  
    ros.on("error", function (error) {
      console.log("Error connecting to websocket server: ", error);
      Setconnected(false);
    });
  
    ros.on("close", function () {
      console.log("Connection to websocket server closed.");
      Setconnected(false);
  
      setTimeout(() => {
        try {
          ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "");
        } catch (error) {
          console.log("connection problem");
        }
      }, Config.RECONNECTION_TIME);
    });
  
  },[])
 
  return (
    <div>
      <Alert className={connected ? "alert-custom-green" : "alert-custom-red"}>{connected ? "Robot Connected" : "Robot Disconnected !"}</Alert>
    </div>
  );
}

export default Connection;
