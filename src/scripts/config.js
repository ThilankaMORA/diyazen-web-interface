const Config = {
  ROSBRIDGE_SERVER_IP: "192.168.8.101",
  ROSBRIDGE_SERVER_PORT: "9090",
  RECONNECTION_TIME: 3000,
  CMD_VEL_TOPIC:"/cmd_vel/joy_teleop",
  CMD_VEL_TOPIC_JOY:"/web_cmd_vel",
  POSE_TOPIC:"/amcl_pose",
  ODOM_TOPIC:"/odom",
};

export default Config;