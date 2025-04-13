import { useState } from "react";

const symbols = ["🍒", "🍋", "🍉", "⭐", "🔔"];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const SlotMachine = () => {
  const [reels, setReels] = useState(["🍒", "🍋", "🍉"]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState("");

  const spinReels = () => {
    setIsSpinning(true);
    
    setTimeout(() => {
      const newReels = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
      setReels(newReels);
      setIsSpinning(false);
      
      if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
        setMessage("🎉 You Win! 🎉");
      } else {
        setMessage("❌ Try Again!");
      }
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎰 Slot Machine 🎰</h2>
      <div style={{ fontSize: "50px", display: "flex", justifyContent: "center" }}>
        {reels.map((symbol, index) => (
          <div key={index} style={{ margin: "10px", transition: "transform 1s" }}>
            {symbol}
          </div>
        ))}
      </div>
      <button onClick={spinReels} disabled={isSpinning} style={{ fontSize: "20px", marginTop: "20px" }}>
        {isSpinning ? "Spinning..." : "Spin 🎲"}
      </button>
      <h3>{message}</h3>
    </div>
  );
};

export default SlotMachine;
