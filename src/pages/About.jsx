import { useState } from "react";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Alert from '../components/alert/Alert'
import styles from './About.module.css'
import wordCountImage from '../assets/wordCounter.jpg'

export default function About() {
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
    <div className={`${styles.aboutContainer} ${mode === 'dark' ? styles.darkMode : ''}`}>
      <div className={styles.aboutText}>

        
        <h2>About Us</h2>

        <h3>What is WordCounter ?</h3>
        <p>
        Apart from counting words and characters, our online editor can help you to check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. Even if you leave the site and come back later.   <strong>Tip: Bookmark this page now.</strong></p>
        <p>
        Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.

        In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.</p>
        <p>
        In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you’re using.

        Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.</p>
      </div>
      <div className={styles.aboutImage}>
        <img src={wordCountImage} alt="Word Counter" />
      </div>
    </div>
    <Footer />
    </>
  )
}
