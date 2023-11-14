import { useEffect, useRef } from "react";

// Don't run effect on first render.
// NOTE: Because of React.StrictMode, useEffect is called twice in development. Which means that the callback will be called twice on "first" render.

export default function useUpdateEffect(
  callback: Function,
  dependencies: any[]
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
