import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../hooks/useCart";
import { Product } from "../../../interfaces/interfaces";
import ButtonMain from "../../ButtonMain";
import AddToCartModal from "../../AddToCartModal";
import QuantityInput from "../QuantityInput";
import { useQuantityInput } from "../QuantityInput/hooks/useQuantityInput";

interface props {
  product: Product;
}

const ProductCard: FC<props> = ({ product }) => {
  const { value, setValue } = useQuantityInput();
  const { pushToCart } = useCart();
  const handleAddProductToCart = (handleShow: () => void) => {
    if (value <= 0) return;
    pushToCart({ product, quantity: value });
    handleShow();
    setValue(0);
  };
  return (
    <>
      <Card style={{ width: "15rem", margin: 10 }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Card.Body>
          <div className="d-flex flex-column align-items-center">
            <span style={{ display: "block", fontWeight: 600 }}>
              ${product.price}
            </span>
            <span style={{ display: "block", marginBottom: 15 }}>
              {product.name}
            </span>
            <QuantityInput value={value} setValue={setValue} />
            <AddToCartModal>
              {(handleShow) => (
                <ButtonMain
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleAddProductToCart(handleShow)}
                >
                  <AiOutlineShoppingCart style={{ marginRight: 10 }} />
                  Agregar al carrito
                </ButtonMain>
              )}
            </AddToCartModal>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
