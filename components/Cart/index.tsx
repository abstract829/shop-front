import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProductCart from "./ProductCart";
import products from "../../public/products.json";
import ButtonMain from "../ButtonMain";
const CartComponent = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col md={8}>
          <Card className="p-4">
            {products.map((product, idx) => (
              <ProductCart product={product} key={idx} />
            ))}
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4">
            <p>Envío a domicilio no incluido</p> <p>Total: $26.990</p>
            <ButtonMain>Completar compra</ButtonMain>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartComponent;
