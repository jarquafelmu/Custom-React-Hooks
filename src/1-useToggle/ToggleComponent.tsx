import React from "react";
import useToggle from "./useToggle";

// Could be used for a model or something else

/**
 * A component that renders a toggle button and displays the current state of the toggle.
 * @returns JSX.Element
 */
export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}
