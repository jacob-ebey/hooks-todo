import { useCallback, useState } from "react";

export default function useInput(defaultValue, trim) {
  const [value, setValue] = useState(defaultValue || "");

  const onChange = useCallback(event => {
    setValue(trim ? event.target.value.trim() : event.target.value);
  });

  return [value, onChange];
}
