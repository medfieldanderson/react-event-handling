import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [submitStyle, setSubmitStyle] = useState({ backgroundColor: "#fff" });
  // could also just use boolean as state to determine hover state: true = hover;
  // then in the style below use  style={{background: (submitStyle ? "black" : white)}}

  const handleClick = () => {
    setHeadingText("Submitted");
  };

  const handleMouseOver = () => {
    setSubmitStyle({ backgroundColor: "#000" });
  };

  const handleMouseOut = () => {
    setSubmitStyle({ backgroundColor: "#fff" });
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={submitStyle}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
