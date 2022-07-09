import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("DarkMode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("LightMode has been  enabled!", "success");
    }
  };
  return (
    <>
      <Navbar title="Text-analyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textarea />
      {/* <Router>
        <Navbar title="Text-analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textarea />} />
            <Route path="About/*" element={<About />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
