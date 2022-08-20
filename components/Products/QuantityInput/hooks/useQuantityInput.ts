import { useState } from "react";

export const useQuantityInput = (initialValue?: number) => {
  const [value, setValue] = useState<number>(initialValue ? initialValue : 0);

  return { value, setValue };
};
