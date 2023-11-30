import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./preview.css";
import "animate.css";

function Preview() {
  const [animatedText, setAnimatedText] = useState("");
  const [animatedTitle, setAnimatedTitle] = useState("");
  const [buttonStyle, setButtonStyle] = useState("none");

  const text = "L uciano Piñeyro";
  const textTitle = " Full Stack Developer";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setAnimatedText((prevText) => prevText + text.charAt(index));
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setAnimatedTitle((prevText) => prevText + textTitle.charAt(index));
      index++;

      if (index === textTitle.length) {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [textTitle]);

  useEffect(() => {
    const buttonInterval = setInterval(() => {
      setButtonStyle((prevStyle) => (prevStyle === "none" ? "block" : null));
    }, 4500);

    return () => clearInterval(buttonInterval);
  }, [textTitle]);

  return (
    <div className="containerPreview">
      <div>
        <h1>{animatedText}</h1>
      </div>

      <div className="containerAnimatedTitle">
        <h1>{animatedTitle}</h1>
      </div>

      <div className="containerButton " style={{ display: buttonStyle }}>
        <Link to="/home">
          <button className="readMore animate__animated animate__zoomInRight">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Preview;
