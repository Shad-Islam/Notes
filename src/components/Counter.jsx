import React, { useState } from "react";

function Counter() {
  const [dynamicCounter, setdynamicCounter] = useState(0);

  const increaseHandler = (props) => {
    setdynamicCounter(dynamicCounter + props);
    console.log(dynamicCounter);
  };

  const decreaseHandler = (props) => {
    setdynamicCounter(dynamicCounter - props);
    console.log(dynamicCounter);
  };

  return (
    <div className="counter">
      <h1>The current value of counter is {dynamicCounter}</h1>
      <button onClick={() => increaseHandler(1)} className="counter__btn">
        Increase by 1
      </button>
      <button onClick={() => decreaseHandler(1)} className="counter__btn">
        decrease by 1
      </button>

      <button onClick={() => increaseHandler(5)} className="counter__btn">
        Increase by 5
      </button>
      <button onClick={() => decreaseHandler(5)} className="counter__btn">
        decrease by 5
      </button>
    </div>
  );
}

export default Counter;
