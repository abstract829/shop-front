import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useCart from "../../hooks/useCart";

import ButtonMain from "../ButtonMain";
import CartItems from "./CartItems";

interface props {
  className?: string;
  style?: {};
}

const CartComponent: FC<props> = ({ className, style }) => {
  const { getTotalPrice } = useCart();
  return (
    <Container className={className + " p-4"} style={style}>
      <Row>
        <Col md={8}>
          <CartItems />
        </Col>
        <Col md={4}>
          <Card className="p-4">
            <p>Envío a domicilio no incluido</p>{" "}
            <p>Total: ${getTotalPrice()}</p>
            <ButtonMain>Completar compra</ButtonMain>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartComponent;
