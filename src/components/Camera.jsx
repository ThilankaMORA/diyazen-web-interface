import React, { useEffect } from "react";
import Config from "../scripts/config";

function Camera() {
  useEffect(() => {
    var video = document.getElementById("video");
    video.src = "http://" + Config.ROSBRIDGE_SERVER_IP + ":8080/stream?topic=/camera/rgb/image_raw&type=mjpeg&quality=80";
  });

  return (
    <div class="col d-flex">
      <img src="" alt="" id="video" width={500} />
    </div>
  );
}

export default Camera;
