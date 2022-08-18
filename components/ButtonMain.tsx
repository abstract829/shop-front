import React, { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";
interface props {
  children: ReactNode;
  style: {};
}
const ButtonMain: FC<props> = ({ children, style }) => {
  return (
    <Button variant="dark" style={style}>
      {children}
    </Button>
  );
};

export default ButtonMain;
