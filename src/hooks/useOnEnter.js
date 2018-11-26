import { useCallback } from "react";

export default function useOnEnter(callback, inputs) {
  return useCallback(event => {
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();
    callback(event);
  }, inputs);
}
