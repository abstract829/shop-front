import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
interface props {
  value: number;
  afterChange?: (...args: any) => void;
  setValue: Dispatch<SetStateAction<number>>;
}
const QuantityInput: FC<props> = ({
  value,
  setValue,
  afterChange = () => null,
}) => {
  useEffect(() => {
    afterChange();
  }, [value]);

  const plus = () => {
    setValue((prev: number) => prev + 1);
  };
  const minus = () => {
    if (value >= 1) setValue((prev: number) => prev - 1);
  };
  return (
    <div
      className="d-flex align-items-center"
      style={{
        padding: "0 0.5em",
        backgroundColor: "#eeeeee",
        width: 100,
      }}
    >
      <AiOutlineMinus
        style={{
          backgroundColor: "#eeeeee",
          height: 30,
          width: 20,
          cursor: "pointer",
        }}
        onClick={minus}
      />
      <input
        type="number"
        value={value}
        disabled={true}
        style={{
          width: "3em",
          textAlign: "center",
          height: 30,
          border: 0,
          backgroundColor: "#eeeeee",
        }}
      />
      <AiOutlinePlus
        onClick={plus}
        style={{
          backgroundColor: "#eeeeee",
          height: 30,
          width: 20,
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default QuantityInput;
