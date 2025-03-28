import React from "react";

export default function About({ mode }) {
  const myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "#212529" : "white",
    border: mode === "dark" ? "1px solid white" : "1px solid black",
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Project Overview</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a powerful React-based web application designed to
              help users manipulate text with ease. Whether you need to convert
              text to uppercase, lowercase, or sentence case, remove extra
              spaces, or simply clear your text, TextUtils provides an intuitive
              interface and robust functionality to handle your text processing
              needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Key Features</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Transformation: Convert your text to uppercase, lowercase,
              and sentence case effortlessly. Clipboard Operations: Copy text to
              clipboard or paste directly from it. Text Analysis: Get real-time
              statistics including character count, word count, and estimated
              reading time. Dark Mode: Enjoy a visually appealing dark mode for
              comfortable use in low-light environments, with a universal toggle
              that applies across the entire app.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Technologies & Tools</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Built with React.js and styled using Bootstrap 5, TextUtils
              leverages modern web development technologies to deliver a
              seamless user experience. The project is also supported by testing
              frameworks such as React Testing Library and Jest, ensuring
              reliable performance and quality assurance throughout the
              development lifecycle.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
