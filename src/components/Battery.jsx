import React from "react";
import BatteryGauge from "react-battery-gauge";

function Battery() {
  return (
    <div>
      <BatteryGauge value={40} />
    </div>
  );
}

export default Battery;
