import React from "react";

const ColorsSaved = ({ color }) => {
  return (
    <div className="colorsSaved">
      <h3>{color.title}</h3>
      <div className="circlesRowSaved">
        <div
          className="circlesSaved"
          style={{
            backgroundColor: color.color1,
          }}
        ></div>
        <div
          className="circlesSaved"
          style={{
            backgroundColor: color.color2,
          }}
        ></div>
        <div
          className="circlesSaved"
          style={{
            backgroundColor: color.color3,
          }}
        ></div>
        <div
          className="circlesSaved"
          style={{
            backgroundColor: color.color4,
          }}
        ></div>
        <div
          className="circlesSaved"
          style={{
            backgroundColor: color.color5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorsSaved;
