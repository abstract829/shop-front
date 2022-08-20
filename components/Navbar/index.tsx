import Image from "next/image";
import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import Redes from "../Redes";

const NavbarComponent: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image
            src="/imgs/logo.png"
            width={100}
            height={50}
            alt="img"
            objectFit="cover"
          />
        </Navbar.Brand>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav style={{ marginRight: 12 }}>
            <Nav.Link href="#home">Vende</Nav.Link>
            <Nav.Link href="#features">Invierte</Nav.Link>
            <Nav.Link href="#pricing">Propiedades</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="/carro">
              <AiOutlineShoppingCart style={{ fontSize: 30 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
