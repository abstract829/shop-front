import type { NextPage } from "next";
import ProductList from "../components/Products/ProductList";
import CarouselComponent from "../components/Carousel";
import MainLayout from "../layout/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <CarouselComponent />
      <ProductList />
    </MainLayout>
  );
};

export default Home;
