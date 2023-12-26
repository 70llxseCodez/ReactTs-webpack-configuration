import React, { useCallback, useState } from "react";
import style from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button className={style.button} onClick={() => setCounter(counter + 1)}>
        click
      </button>
    </div>
  );
};

export default Counter;
