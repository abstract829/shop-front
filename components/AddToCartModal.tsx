import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ButtonMain from "./ButtonMain";
import CartItems from "./Cart/CartItems";
import { TiTick } from "react-icons/ti";
interface props {
  children?: (...args: any) => JSX.Element;
}
const AddToCartModal: FC<props> = ({ children }) => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {children && children(handleShow, handleClose)}

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <TiTick style={{ fontSize: 35 }} />
            Lo que llevas en tu carro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartItems style={{ maxHeight: "300px", overflowY: "auto" }} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <span onClick={handleClose} style={{ cursor: "pointer" }}>
            Seguir comprando
          </span>
          <ButtonMain onClick={() => router.push("/carro")}>
            <AiOutlineShoppingCart style={{ marginRight: 10 }} />
            Ir al carro
          </ButtonMain>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddToCartModal;
