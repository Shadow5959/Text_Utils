import React, { useState } from "react";
import { showAlertBox } from "./AlertBox"; // Adjusted path assuming AlertBox is in the same folder
export default function TextForm(props) {
  const [text, setText] = useState(""); // Stores original text
  const [newText, setNewText] = useState("");

  const handleUpClick = () => {
    setNewText(text.toUpperCase());
    props.showAlert("Upper case applied!", "success");
  };
  const handleLoClick = () => {
    setNewText(text.toLowerCase());
    props.showAlert("Lower case applied!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update original text only
  };
  const handleSentenceCase = () => {
    let newText = text.split(". ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setNewText(newText.join(". "));
    props.showAlert("Sentence case applied!", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setNewText(newText.join(" "));

    props.showAlert("Spaces Removed!", "success");
  };
  const handleClearText = () => {
    setText(""); // Clear original text
    setNewText(""); // Clear uppercase text

    props.showAlert("Text Cleared!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="container my-3">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#7e7e7e6b" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="8"
              placeholder="Enter text here..."
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>
            UPPER CASE
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
            lower case
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleSentenceCase}>
            Sentence case
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearText}>
            Clear Text
          </button>
        </div>

        <div className="container my-3">
          <h1>Your text summary</h1>
          <div className="my-3">
            <textarea
              className="form-control"
              value={newText} // Shows the appropriate version
              id="resultBox"
              rows="8"
              readOnly
              style={{
                backgroundColor: props.mode === "dark" ? "#7e7e7e6b" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              placeholder="Result..."
            ></textarea>
            <button disabled={text.length===0}
              className="btn btn-success mx-1 my-1"
              onClick={() => {
                navigator.clipboard.writeText(newText);
                showAlertBox("Copied to clipboard!", {
                  backgroundColor: "green",
                  color: "white",
                  duration: 1000,
                });
              }}
            >
              Copy Text
            </button>
            <button
              className="btn btn-success mx-1 my-1"
              onClick={() => {
                navigator.clipboard.readText().then((clipboardText) => {
                  setText(clipboardText);
                });
                showAlertBox("Text pasted!", {
                  backgroundColor: "green",
                  color: "white",
                  duration: 1000,
                });
              }}
            >
              Paste Text
            </button>
            <div className="container my-3">
              <h6>Character Count: {text.length} </h6>
              <h6>
                Word Count:{" "}
                {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}{" "}
              </h6>
              <h6>
                Time to Read:{" "}
                {text.trim() === ""
                  ? 0
                  : 0.008 * text.trim().split(/\s+/).length}{" "}
                Minutes
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
