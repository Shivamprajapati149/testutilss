import React, { useState } from "react";

export default function Textform(props) {

  //function for a copy test
  const handlecopy = () => {
    alert("Text  is copied ");
   navigator.clipboard.writeText(text);
  };
  // functioon for to convert text to uppercase
  const handleupclick = () => {
    setText(text.toUpperCase());
  };

  // function for to convert text to lowercase
  const handleloclick = () => {
    setText(text.toLowerCase());
  };

  //function for the control  clearbutton
  const handleclear = () => {
    setText("");
    setText("ENTER THE TEXT HERE ");
  }

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("ENTER THE TEXT HERE ");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}
          ></textarea>
        </div>
          <div
            className="btn mx-3"
            style={{
              backgroundColor: 'skyblue',
              color: 'black',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '10px 24px',
              fontSize: '1rem',
              letterSpacing: '1px',
              transition: 'background 0.3s, color 0.3s',
              marginBottom: '10px'
            }}
            onClick={handleupclick}
          >
            🚀 <span style={{fontFamily: 'cursive'}}>Convert To Uppercase</span>
          </div>
          <div
            className="btn"
            style={{
              backgroundColor: 'skyblue',
              color: 'black',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '10px 24px',
              fontSize: '1rem',
              letterSpacing: '1px',
              transition: 'background 0.3s, color 0.3s',
              marginBottom: '10px'
            }}
            onClick={handleloclick}
          >
            🌙 <span style={{fontFamily: 'cursive'}}>Convert To Lowercase</span>
          </div>
          <div
            className="btn mx-3"
            style={{
              backgroundColor: 'skyblue',
              color: 'black',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '10px 24px',
              fontSize: '1rem',
              letterSpacing: '1px',
              transition: 'background 0.3s, color 0.3s',
              marginBottom: '10px'
            }}
            onClick={handleclear}
          >
            🧹 <span style={{fontFamily: 'cursive'}}>Clear Text</span>
          </div>
          <div
            className="btn mx-3"
            style={{
              backgroundColor: 'skyblue',
              color: 'black',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '10px 24px',
              fontSize: '1rem',
              letterSpacing: '1px',
              transition: 'background 0.3s, color 0.3s',
              marginBottom: '10px'
            }}
            onClick={handlecopy}
          >
            📋 <span style={{fontFamily: 'cursive'}}>Copy Text</span>
          </div>
          

      </div>
      
      <div className="container my-3 ; ">
        <h2>Text Summary:</h2>
        <p>
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes take for read</p>
        <h2>Preview Text:</h2>
        <p>{text}</p>
      </div>
    </> 
  );
}
