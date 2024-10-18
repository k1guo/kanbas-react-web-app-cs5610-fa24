import React, { useState } from "react";
export default function Counter() {
  // we need to tell React.js that changes to a particular
  // variable is indeed relevant to changes in the DOM.
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}