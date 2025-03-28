import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    document.body.style.backgroundColor = "#212529"; // Dark mode background
  }, []);

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
    document.body.style.backgroundColor = mode === 'light' ? '#212529' : 'white';

    if (mode === 'light') {
      showAlert("Dark mode has been enabled", "success");
    } else {
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} ></TextForm>
       </div>
     
    </>
  );
}

export default App;
