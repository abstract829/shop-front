import React, { FC } from "react";
import Nav from "react-bootstrap/Nav";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
interface props {
  style?: {};
  className?: string;
}
const Redes: FC<props> = ({ style, className }) => {
  return (
    <div className={className + " d-flex gap-3"} style={style}>
      <Nav.Link href="#pricing">
        <AiFillFacebook />
      </Nav.Link>
      <Nav.Link href="#pricing">
        <AiOutlineWhatsApp />
      </Nav.Link>
      <Nav.Link href="#pricing">
        <AiFillInstagram />
      </Nav.Link>
      <Nav.Link href="#pricing">
        <AiFillTwitterSquare />
      </Nav.Link>
    </div>
  );
};

export default Redes;
