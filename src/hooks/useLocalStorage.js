import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Load from localStorage OR use initialValue
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    if (value !== null && value !== undefined) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}

