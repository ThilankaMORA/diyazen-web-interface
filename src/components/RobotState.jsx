import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Config from "../scripts/config";
import * as Three from "three";

function RobotState() {
  const [x, set_x] = useState(0);
  const [y, set_y] = useState(0);
  const [orientation, set_orientation] = useState(0);
  const [linear_velocity, set_linear_velocity] = useState(0);
  const [angular_velocity, set_angular_velocity] = useState(0);
  const [ros, setRos] = useState(null);

  useEffect(() => {
    var ros = new window.ROSLIB.Ros({
      url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
    });

    ros.on("connection", function () {
      console.log("Connected to websocket server in RobotState.");
    });

    setRos(ros);

    //pose subscriber
    var pose_subscriber = new window.ROSLIB.Topic({
      ros: ros,
      name: Config.POSE_TOPIC,
      messageType: "geometry_msgs/PoseWithCovarianceStamped",
    });

    //pose callback
    pose_subscriber.subscribe((message) => {
      set_x(message.pose.pose.position.x.toFixed(2));
      set_y(message.pose.pose.position.y.toFixed(2));
      set_orientation(getOrientationFromQuaternion(message.pose.pose.orientation).toFixed(2));
    });

    //velocity subscriber
    var velocity_subscriber = new window.ROSLIB.Topic({
      ros: ros,
      name: Config.ODOM_TOPIC,
      messageType: "nav_msgs/Odometry",
    });

    //velocity callback
    velocity_subscriber.subscribe((message) => {
      set_linear_velocity(message.twist.twist.linear.x.toFixed(2));
      set_angular_velocity(message.twist.twist.angular.z.toFixed(2));
    });
  }, []);

  function getOrientationFromQuaternion(ros_orientation_quaternion) {
    var q = new Three.Quaternion(ros_orientation_quaternion.x, ros_orientation_quaternion.y, ros_orientation_quaternion.z, ros_orientation_quaternion.w);

    var RPY = new Three.Euler().setFromQuaternion(q);

    return RPY["_z"] * (180 / Math.PI);
  }

  return (
    <div className="state-box">
      <Row>
        <Col>
          <h4 className="mt-4">Position</h4>
          <p className="mt-0">x: {x}</p>
          <p className="mt-0">y: {y}</p>
          <p className="mt-0">Orientation: {orientation}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="mt-4">Velocities</h4>
          <p className="mt-0">Linear Velocity: {linear_velocity}</p>
          <p className="mt-0">Angular Velocity: {angular_velocity}</p>
        </Col>
      </Row>
    </div>
  );
}

export default RobotState;
