import { useState } from "react";

type ToggleFunction = (value?: unknown) => void;

/**
 * A custom hook that returns a tuple with the current value and a function to toggle the value.
 * @param defaultValue The default value of the toggle.
 * @returns [boolean, ToggleFunction]
 */
export default function useToggle(
  defaultValue: boolean
): [boolean, ToggleFunction] {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue: ToggleFunction = (value?: unknown) => {
    setValue((prevValue?: unknown) =>
      typeof value === "boolean" ? value : !prevValue
    );
  };

  return [value, toggleValue];
}
