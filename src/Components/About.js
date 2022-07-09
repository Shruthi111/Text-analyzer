import React from "react";

export default function About() {
  return (
    <>
      <div className="card mx-5 my-5 text-dark" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text ">
            This application's name is Text-Analyzer. Text-analyzer is a utility
            where you can manipulate your text in the way you want. Like
            converting to lowercase,uppercase,extracting email,clearing
            text,word count and many more.
          </p>
        </div>
      </div>
    </>
  );
}
