import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

function SelectColor() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />;
    </div>
  );
}

export default SelectColor;
