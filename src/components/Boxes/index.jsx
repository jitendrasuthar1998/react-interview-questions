import { useState } from "react";

const Boxes = () => {
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    const handleSelectBoxes = (index) => {
        setSelectedBoxes((prev) => [...prev, index]);

        // Remove the box after 1 second
        setTimeout(() => {
            setSelectedBoxes((prev) => prev.filter((box) => box !== index));
        }, 5000);
    };

    return (
        <div style={{ backgroundColor: "black", height: "500px", width: "500px", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 10, padding: "10px" }}>
            {Array.from({ length: 9 }, (_, index) => (
                <div
                    onClick={() => handleSelectBoxes(index)}
                    key={index}
                    style={{
                        height: "150px",
                        width: "150px",
                        backgroundColor: selectedBoxes.includes(index) ? "green" : "gray",
                        transition: "background-color 0.3s ease"
                    }}
                />
            ))}
        </div>
    );
};

export default Boxes;
