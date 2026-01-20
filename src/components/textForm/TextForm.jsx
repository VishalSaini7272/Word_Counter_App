import { useState } from "react";
import styles from "./TextForm.module.css";

export default function TextForm({ heading, mode,showAlert }) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to upperCase!","success")
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowerCase!","success")
  };
  const handleClear = () => {
    setText("");
    showAlert("All text is cleared...","success")
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className={`${styles.TextForm} ${mode === "dark" ? styles.dark : ""}`}
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h2>{heading}</h2>
        <textarea
          className={styles.formContainer}
          style={{ backgroundColor: mode === "dark" ? "grey" : "white" , color: mode === "dark" ? "white" : "black" } }
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here..."
          id="exampleFormControlTextarea1"  
        ></textarea>
      </div>

      <button disabled={text.length === 0} className={styles.upperCaseBtn} onClick={handleUpperClick}>
        Convert UpperCase
      </button>
      <button disabled={text.length === 0} className={styles.lowerCaseBtn} onClick={handleLowerClick}>
        Convert LowerCase
      </button>
      <button disabled={text.length===0} className={styles.clearBtn} onClick={handleClear}>
        Clear Text
      </button>
      <div className={`${styles.summery} ${mode === "dark" ? styles.dark : ""}`} style={{ color: mode === "dark" ? "white" : "black" }}>
        <h2
          className={styles.heading}
          
        >
          Your Text Summery
        </h2>
        <p
          className={styles.wordCount}
          
        >
          {`Words Count : ${text.split(/\s+/).filter((element)=>{return element.length !==0}).length}`} and {' '}
          {`Characters Count :  ${text.split(" ").join("").split("\n").join("").length}`} 
            {/*1) split(" ") = break the string on every spaces.
           2) join("") => remove the spaces., 3)\n => remove the new lines., 4).length => Left characters will be count. 5) \s+ =>Matches any whitespace (space, tab, newline, etc.)*/}
        </p>
        <p className={styles.timeCount} >
         
          {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read(Based on a 125 words per minute)
        </p>
        <h2
          className={styles.preview}
          
        >
          Preview
        </h2>
        <p
          className={styles.previewText}
          
        >
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
