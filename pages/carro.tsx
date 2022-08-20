import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartComponent from "../components/Cart";
import QuantityInput from "../components/Products/QuantityInput";
import MainLayout from "../layout/MainLayout";

const CarroPage = () => {
  return (
    <MainLayout>
      <CartComponent />
    </MainLayout>
  );
};

export default CarroPage;
