import { useState } from "react";

export const useQuantityInput = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  return { value, setValue, handleChange };
};
