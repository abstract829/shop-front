import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import products from "../../../public/products.json";
import ProductCard from "../ProductCard";
const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map((product, idx) => (
          <Col
            key={idx}
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
