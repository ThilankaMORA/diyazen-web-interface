import React from "react";
import { Joystick } from "react-joystick-component";
import Config from "../scripts/config";

function Teleoperation() {
  var ros = new window.ROSLIB.Ros({
    url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
  });

  ros.on("connection", function () {
    console.log("Connected to websocket server in Teleoperation.");
  });

  function handleMove(event){
    console.log("handle move");
  
    var cmd_vel = new window.ROSLIB.Topic({
        ros: ros,
        name: Config.CMD_VEL_TOPIC_JOY,
        messageType: "geometry_msgs/Twist"
    });
  
    var twist = new window.ROSLIB.Message({
        linear:{
            x: event.y/2,
            y: 0,
            z: 0,
        },
        angular:{
            x: 0,
            y: 0,
            z: -event.x/2,
        },
    });
    
    cmd_vel.publish(twist);
    
  }
  
  function handleStop(event){
    console.log("handle stop");
  
    var cmd_vel = new window.ROSLIB.Topic({
        ros: ros,
        name: Config.CMD_VEL_TOPIC_JOY,
        messageType: "geometry_msgs/Twist"
    });
  
    var twist = new window.ROSLIB.Message({
        linear:{
            x: 0,
            y: 0,
            z: 0,
        },
        angular:{
            x: 0,
            y: 0,
            z: 0,
        },
    });
    cmd_vel.publish(twist);
  }


  return (
    <div className="joystick">
      <Joystick
        size={200}
        baseColor="#B9E8FE"
        stickColor="#33BEFF"
        move={handleMove}
        stop={handleStop}
      ></Joystick>
    </div>
  );
}



export default Teleoperation;
