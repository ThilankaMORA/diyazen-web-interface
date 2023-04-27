import React, { useState } from "react";
import BatteryGauge from "react-battery-gauge";
import ros from "./ros";

function Battery() {
  const [batteryValue, setBatteryValue] = useState(0);

  var battery_subscriber = new window.ROSLIB.Topic({
    ros: ros,
    name: "batSOC",
    messageType: "std_msgs/Float32",
  });

  battery_subscriber.subscribe(function (message) {
    setBatteryValue(message.data.toFixed());
  });

  return (
    <div id='battery'>
      <BatteryGauge
        value={batteryValue}
        // orientation="vertical"
        size={50}
        customization={{
          batteryBody: {
            strokeWidth: 4,
            cornerRadius: 4,
            fill: "none",
            strokeColor:"#fff",
          },
          batteryCap: {
            fill: "none",
            strokeWidth: 4,
            strokeColor: "#fff",
            cornerRadius: 2,
            capToBodyRatio: 0.4,
          },
          batteryMeter: {
            fill: "green",
            lowBatteryValue: 15,
            lowBatteryFill: "red",
            outerGap: 1,
            noOfCells: 1, // more than 1, will create cell battery
            interCellsGap: 1,
          },
          readingText: {
            lightContrastColor: "#fff",
            darkContrastColor: "#111",
            lowBatteryColor: "red",
            fontFamily: "Helvetica",
            fontSize: 20,
            showPercentage: true,
          },
          chargingFlash: {
            scale: undefined,
            fill: "orange",
            animated: true,
            animationDuration: 1000,
          },
        }}
      />
    </div>
  );
}

export default Battery;
