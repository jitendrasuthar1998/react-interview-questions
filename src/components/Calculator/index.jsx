import  { useState, useEffect } from "react";
import { evaluate } from "mathjs"; // Secure evaluation instead of eval()

const Calculator = () => {
  const [input, setInput] = useState(""); // Stores user input
  const [result, setResult] = useState(""); // Stores calculation result

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to clear input
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  // Function to calculate result
  const calculateResult = () => {
    try {
      setResult(evaluate(input)); // Safe mathematical evaluation
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to handle keyboard inputs
  const handleKeyPress = (event) => {
    const { key } = event;
    console.log("key", key);
    if (!isNaN(key) || "+-*/.".includes(key)) {
      setInput((prev) => prev + key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1)); // Removes the last character
    } else if (key === "Escape") {
      clearInput();
    }
  };

  // Add event listener for keyboard input
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div style={styles.calculator}>
      <h2>React Calculator</h2>
      <input type="text" value={input} style={styles.input} />
      <h3>{result}</h3>

      <div style={styles.buttons}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
            style={styles.button}
          >
            {btn}
          </button>
        ))}
        <button onClick={clearInput} style={{ ...styles.button, backgroundColor: "red" }}>
          C
        </button>
      </div>
    </div>
  );
};

// CSS styles for the calculator
const styles = {
  calculator: { textAlign: "center", maxWidth: "300px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f5f5f5" },
  input: { width: "90%", padding: "10px", fontSize: "20px", textAlign: "right", marginBottom: "10px" },
  buttons: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" },
  button: { padding: "10px", fontSize: "20px", cursor: "pointer", backgroundColor: "#ccc", border: "none", borderRadius: "5px" },
};

export default Calculator;
