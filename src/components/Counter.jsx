import React, { useState } from "react";

function Counter() {
  const [dynamicCounter, setdynamicCounter] = useState(0);

  const increaseHandler = () => {
    setdynamicCounter(dynamicCounter + 1);
    console.log(dynamicCounter);
  };

  const decreaseHandler = () => {
    setdynamicCounter(dynamicCounter - 1);
    console.log(dynamicCounter);
  };

  return (
    <div className="counter">
      <h1>The current value of counter is {dynamicCounter}</h1>
      <button onClick={increaseHandler} className="counter__btn">
        Increase by 1
      </button>
      <button onClick={decreaseHandler}>decrease by 1</button>
    </div>
  );
}

export default Counter;
