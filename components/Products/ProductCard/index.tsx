import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ButtonMain from "../../ButtonMain";
import QuantityInput from "../QuantityInput";
import { useQuantityInput } from "../QuantityInput/hooks/useQuantityInput";

interface props {
  image: string;
  name: string;
  price: number;
}

const ProductCard: FC<props> = ({ image, name, price }) => {
  const { value, setValue, handleChange } = useQuantityInput();

  return (
    <Card style={{ width: "15rem", margin: 10 }}>
      <Card.Img
        variant="top"
        src="/imgs/zapatos.jpg"
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <span style={{ display: "block", fontWeight: 600 }}>${price}</span>
          <span style={{ display: "block", marginBottom: 15 }}>{name}</span>
          <QuantityInput
            value={value}
            setValue={setValue}
            handleChange={handleChange}
          />
          <ButtonMain
            style={{ marginTop: 20, display: "flex", alignItems: "center" }}
          >
            <AiOutlineShoppingCart style={{ marginRight: 10 }} />
            Ir al carrito
          </ButtonMain>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
