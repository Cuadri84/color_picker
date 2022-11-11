import palette from "../assets/palette.png";

function Title() {
  return (
    <div className="title">
      <img
        src={palette}
        className="palette"
        alt="pal"
        width="40px"
        height="40px"
      />
      <h1>Color palette generator</h1>
    </div>
  );
}

export default Title;
