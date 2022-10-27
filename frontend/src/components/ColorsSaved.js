import React from "react";

const ColorsSaved = ({ color }) => {
  return (
    <div className="colors-saved">
      <h4>{color.color1}</h4>
      <h4>{color.color2}</h4>
      <h4>{color.color3}</h4>
      <h4>{color.color4}</h4>
      <h4>{color.color5}</h4>
    </div>
  );
};

export default ColorsSaved;
