import React, { useEffect, useState } from "react";
import Config from "../scripts/config";
import { Button } from "react-bootstrap";
import ros from "./ros";

function PlaceList() {
  const [itemList, setItemList] = useState([]);
 
  var database_subscriber = new window.ROSLIB.Topic({
    ros: ros,
    name: "database",
    messageType: "std_msgs/String",
  });

  database_subscriber.subscribe(function (message) {
    setItemList(message.data.split(","));
  });

  var db_cmd = new window.ROSLIB.Topic({
    ros: ros,
    name: "db_cmd",
    messageType: "std_msgs/String",
  });

  function handleGo(item){
    var message = new window.ROSLIB.Message({
      data: "go,"+item
    });

    db_cmd.publish(message);
  }

  function handleDelete(item){
    var message = new window.ROSLIB.Message({
      data: "remove,"+item
    });

    db_cmd.publish(message);
  }

  return (
    <div>
      <ul>
        {itemList.map((item, index) => (
          <li id ="placeform" key={index}>
            {item}
            <Button id="formbutton" onClick={() => handleGo(item)}>Go</Button>
            <Button id="formbutton" onClick={() => handleDelete(item)}>delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaceList;
