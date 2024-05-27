// 과제 6번
import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 과제 2번
  const addCount = () => {
    setCount(count + 1);
  };
  
  // 과제 3번
  const minusCount = () => {
	  setCount(count - 1);
  };

  // 과제 4번 
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{
      // 과제 5번
      backgroundColor: count ? "red" : "black",
      color: "white",
    }}>
      {/* 과제 1번 */}
	    <button onClick={minusCount}>-</button>
      Count: {count}
      <button onClick={addCount}>+</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default App;