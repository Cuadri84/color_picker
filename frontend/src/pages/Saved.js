import React from "react";
import { useEffect, useState } from "react";
import ColorsSaved from "../components/ColorsSaved";

function Saved() {
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch("/api/colors/");
      // console.log(response);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setColors(json);
      }
    };

    fetchColors();
  }, []);

  return (
    <div className="home">
      <h2>Saved pallettes</h2>
      <div className="colorsSaved">
        {colors &&
          colors.map((color) => <ColorsSaved key={color._id} color={color} />)}
      </div>
    </div>
  );
}

export default Saved;
