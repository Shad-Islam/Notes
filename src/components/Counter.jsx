import React from "react";

function Counter() {
  let counter = 0;
  return (
    <div>
      <h1>The current value of counter is {counter}</h1>
      <button>Increase by 1</button>
      <button>decrease by 1</button>
    </div>
  );
}

export default Counter;
