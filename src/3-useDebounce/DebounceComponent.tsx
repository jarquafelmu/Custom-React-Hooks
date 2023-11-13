import React, { useState } from "react";
import useDebounce from "./useDebounce";

// Run something, but only after a certain delay has elapsed.
// ex: search for something, but only after the user has stopped typing for 500ms.

export default function DebounceComponent() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c: number) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c: number) => c - 1)}>Decrement</button>
    </div>
  );
}
