import { useState } from "react";

/**
 * A custom React hook that provides utility functions for working with arrays.
 * @param defaultValue The default value for the array.
 * @returns An object containing the array, as well as functions for modifying it.
 */
export default function useArray(defaultValue: any[]) {
  const [array, setArray] = useState(defaultValue);

  /**
   * Adds an element to the end of the array.
   * @param element The element to add to the array.
   */
  function push(element: unknown) {
    setArray((a) => [...a, element]);
  }

  /**
   * Filters the elements of the array based on the provided callback function.
   * @param callback A function that accepts up to three arguments. The filter method calls the callback function one time for each element in the array.
   */
  function filter(callback: any) {
    setArray((a) => a.filter(callback));
  }

  /**
   * Updates an element in the array at the specified index.
   * @param {number} index - The index of the element to update.
   * @param {unknown} newElement - The new element to replace the old one.
   */
  function update(index: number, newElement: unknown) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  /**
   * Removes an element from the array at the specified index.
   * @param index - The index of the element to remove.
   */
  function remove(index: number) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  /**
   * Clears the array.
   */
  function clear() {
    setArray([]);
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
  };
}
