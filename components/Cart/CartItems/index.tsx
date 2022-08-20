import React, { FC } from "react";
import ProductCart from "../ProductCart";
import { Card } from "react-bootstrap";
import useCart from "../../../hooks/useCart";

interface props {
  className?: string;
  style?: {};
}

const CartItems: FC<props> = ({ className, style }) => {
  const { cart } = useCart();
  return (
    <Card className={className + " p-4"} style={style}>
      {cart &&
        cart.map((cartItem, idx) => (
          <ProductCart cartItem={cartItem} key={idx} />
        ))}
    </Card>
  );
};

export default CartItems;
