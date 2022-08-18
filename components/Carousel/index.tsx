import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const image = "/imgs/bg.jpg";
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage src={image} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={image} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={image} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
