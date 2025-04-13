import { useEffect, useState } from "react";

const ScrollEvents = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleScroll = () => {
    console.log("handleScroll");
    setItems((prevItems) => {
      let count = prevItems.length + 1;
      const newItems = [...prevItems];
      for (let i = 0; i < 5; i++) {
        newItems.push(count++);
      }
      return newItems;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {items.length
        ? items.map((item) => (
            <div key={item} style={{ height: 50, width: 50 }}>
              {item}
            </div>
          ))
        : null}
    </div>
  );
};

export default ScrollEvents;
