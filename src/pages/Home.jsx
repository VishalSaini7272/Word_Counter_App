

import { useState } from "react";
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import Alert from '../components/alert/Alert'


export default function Home() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.className = "dark-mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.className = "light-mode";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Layout mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/>
      <Footer />

    </>
  )
}
