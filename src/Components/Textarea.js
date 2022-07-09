import React, { useState } from "react";

export default function Textarea(props) {
  const upclick = () => {
    // console.log("Upclick");
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const lowcase = () => {
    // console.log("Lowercase");
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const clear = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Cleared!", "success");
  };

  const getemail = () => {
    const regex =
      /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
    const mail = text.match(regex);
    let newtext = mail.join(/[  ]/);

    settext(newtext);
    props.showAlert("Email extracted!", "success");
  };
  const Removeextraspaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnchange = (event) => {
    settext(event.target.value);
    // console.log("change");
  };
  const [text, settext] = useState(" ");
  return (
    <>
      <div className="mb-3 container my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          onChange={handleOnchange}
          id="mybox"
          rows="8"
          value={text}
        />
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={upclick}
        >
          Capitalize!
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={lowcase}
        >
          Lowercase!
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={clear}
        >
          Clear!
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={getemail}
        >
          Extract Email!
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-3"
          onClick={Removeextraspaces}
        >
          Remove extra spaces!
        </button>
      </div>
      <div className="container">
        <h4>Your text summary:</h4>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
