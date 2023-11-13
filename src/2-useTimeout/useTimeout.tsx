import { useCallback, useEffect, useRef } from "react";

/**
 * A custom hook that sets a timeout and clears it when the component unmounts or the delay changes.
 * @param callback - The function to be called after the delay.
 * @param delay - The delay in milliseconds.
 * @returns An object with `reset` and `clear` functions to reset or clear the timeout.
 */
export default function useTimeout(callback: Function, delay: number) {
  const callbackRef = useRef<Function>(callback);
  const timeoutRef = useRef<number>();

  // Remember the latest callback:
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the timeout:
  const set = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  // Clear the timeout:
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  // Set up the timeout:
  useEffect(() => {
    set();
    // Clear timeout if the components is unmounted or the delay changes:
    return clear;
  }, [delay, set, clear]);

  // In case you want to manually clear the timeout from the consuming component...:
  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
