import { useEffect } from "react";
import { useState, useRef } from "react";
import { CompactPicker } from "react-color";
import plus from "../assets/plus.png";

function ColorPicker() {
  const [title, setTitle] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const ref = useRef(null);

  const toggleRef = (ref) => {
    if (!ref.current) {
      return;
    }
    if (!ref.current.classList.contains("circles-big-border")) {
      ref.current.classList.add("circles-big-border");
    } else {
      ref.current.classList.remove("circles-big-border");
      ref.current = null;
    }
  };
  //  useEffect(()=>{
  //   if (ref.current.id === "1") {
  //     setColor1(event.target.value);
  //     console.log(color1);
  //   }
  //   if (ref.current.id === 2) {
  //     setColor2(event.target.value);
  //   }
  //   if ((ref.current.id = "3")) {
  //     setColor3(event.target.value);
  //   }
  //   if ((ref.current.id = "4")) {
  //     setColor4(event.target.value);
  //   } else {
  //     setColor5(event.target.value);
  //   }
  // })

  return (
    <div>
      <div className="circlesRow">
        <div
          id="1"
          className="circles"
          onClick={(event) => {
            toggleRef(ref);
            event.stopPropagation();
            ref.current = event.target;
            toggleRef(ref);
          }}
          // style={{
          //   backgroundColor: "#E94F37",
          // }}
        ></div>
        <div
          id="2"
          className="circles"
          onClick={(event) => {
            toggleRef(ref);
            event.stopPropagation();
            ref.current = event.target;
            toggleRef(ref);
          }}
          // style={{
          //   backgroundColor: "#E94F37",
          // }}
        ></div>
        <div
          id="3"
          className="circles"
          onClick={(event) => {
            toggleRef(ref);
            event.stopPropagation();
            ref.current = event.target;
            toggleRef(ref);
          }}
          // style={{
          //   backgroundColor: "#E94F37",
          // }}
        ></div>
        <div
          id="4"
          className="circles"
          onClick={(event) => {
            toggleRef(ref);
            event.stopPropagation();
            ref.current = event.target;
            toggleRef(ref);
          }}
          // style={{
          //   backgroundColor: "#E94F37",
          // }}
        ></div>
        <div
          id="5"
          className="circles"
          onClick={(event) => {
            toggleRef(ref);
            event.stopPropagation();
            ref.current = event.target;
            toggleRef(ref);
          }}
          // style={{
          //   backgroundColor: "#E94F37",
          // }}
        ></div>
      </div>
      {/* <CompactPicker
        color={event.target.value}
        onChangeComplete={(event) => {
          event.stopPropagation();
          if (ref.current) {
            ref.current.style.backgroundColor = event.target.value;
          }
        }}
      /> */}
      <div className="inputs">
        <input
          type="color"
          onChange={(event) => {
            event.stopPropagation();
            if (ref.current) {
              console.log(ref.current.id);
              ref.current.style.backgroundColor = event.target.value;
            }
          }}
        />
        <input
          className="textInput"
          type="text"
          placeholder="Website color scheme"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />{" "}
        <div className="rectangle">
          <img src={plus} alt="plus" className="plus" />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
