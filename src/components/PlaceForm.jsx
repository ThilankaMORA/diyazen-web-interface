import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Config from "../scripts/config";

function PlaceForm() {
  const [text, setText] = useState("");

  function placeSend(text) {
    var ros = new window.ROSLIB.Ros({
      url: "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + "",
    });

    ros.on("connection", function () {
      console.log("Connected to websocket server in PlaceForm.");
    });

    var db_cmd = new window.ROSLIB.Topic({
      ros: ros,
      name: "db_cmd",
      messageType: "std_msgs/String",
    });

    var message = new window.ROSLIB.Message({
      data: "add "+text
    });

    db_cmd.publish(message);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
    placeSend(text);
    setText("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label id = "placeform" ClassName="text-muted">
        Add Place >>   
        <input type="text" value={text} onChange={handleChange} />
      </Form.Label>
      <Button id = "formbutton" type="submit">Add</Button>
    </Form>
  );
}

export default PlaceForm;
