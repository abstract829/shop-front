import React, { ChangeEvent, FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ProductCart } from "../../../contexts/CartContext";
import useCart from "../../../hooks/useCart";
import { Product } from "../../../interfaces/interfaces";
import QuantityInput from "../../Products/QuantityInput";
import { useQuantityInput } from "../../Products/QuantityInput/hooks/useQuantityInput";

interface props {
  cartItem: ProductCart;
}

const ProductCart: FC<props> = ({ cartItem }) => {
  const { value, setValue } = useQuantityInput(cartItem.quantity);
  const { updateQuantity } = useCart();
  const handleChange = () => {
    updateQuantity({ product: cartItem.product, quantity: value });
  };

  return (
    <>
      <Row>
        <Col>
          <img
            src={cartItem.product.image}
            style={{ height: 100, objectFit: "cover" }}
          />
        </Col>
        <Col>
          <p>{cartItem.product.name}</p>
          <p>Descripción</p>
        </Col>
        <Col>
          <p>${cartItem.product.price}</p>
          <QuantityInput
            value={value}
            setValue={setValue}
            afterChange={handleChange}
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
