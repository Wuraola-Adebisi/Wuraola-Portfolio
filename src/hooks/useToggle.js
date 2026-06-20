import { useState } from "react";

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  const close = () => setValue(false);
  return { value, toggle, close };
}