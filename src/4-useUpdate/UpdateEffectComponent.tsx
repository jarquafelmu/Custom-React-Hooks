import React, { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c: number) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c: number) => c - 1)}>Decrement</button>
    </div>
  );
}
