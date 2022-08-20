import React, { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";
interface props {
  children: ReactNode;
  style?: {};
  onClick?: (arg: any) => void;
}
const ButtonMain: FC<props> = ({ children, style, onClick }) => {
  return (
    <Button variant="dark" style={style} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonMain;
