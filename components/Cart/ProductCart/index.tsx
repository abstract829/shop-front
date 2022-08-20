import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Product } from "../../../interfaces/interfaces";
import QuantityInput from "../../Products/QuantityInput";
import { useQuantityInput } from "../../Products/QuantityInput/hooks/useQuantityInput";

interface props {
  product: Product;
}

const ProductCart: FC<props> = ({ product }) => {
  const { value, setValue, handleChange } = useQuantityInput();
  return (
    <>
      <Row>
        <Col>
          <img
            src={product.image}
            style={{ height: 100, objectFit: "cover" }}
          />
        </Col>
        <Col>
          <p>{product.name}</p>
          <p>Descripción</p>
        </Col>
        <Col>
          <p>${product.price}</p>
          <QuantityInput
            value={value}
            setValue={setValue}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <p style={{ textAlign: "right" }}>Eliminar</p>
      </Row>
      <hr />
    </>
  );
};

export default ProductCart;
