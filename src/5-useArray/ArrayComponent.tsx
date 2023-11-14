import React from "react";
import useArray from "./useArray";

// Dealing with arrays in react can be a pain. This hook makes it easy to deal with arrays in a functional way.

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((n: number) => n < 3)}>
        Keep numbers less than 3
      </button>
      <button onClick={() => set([1, 2])}>Set to 1, 2</button>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
}
