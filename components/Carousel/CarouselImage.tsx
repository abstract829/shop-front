import Image from "next/image";
import React, { FC } from "react";
interface props {
  src: string;
}
const CarouselImage: FC<props> = ({ src }) => {
  return (
    <div style={{ width: "100%", height: "450px", position: "relative" }}>
      <Image alt="img" src={src} layout="fill" objectFit="cover" />
    </div>
  );
};

export default CarouselImage;
