import Config from "../scripts/config";

var ros = new window.ROSLIB.Ros({
  url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
});

ros.on("connection", function () {
  console.log("Connected to websocket server.");
});

export default ros;