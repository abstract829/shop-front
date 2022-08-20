import type { NextPage } from "next";
import Head from "next/head";
import ProductList from "../components/Products/ProductList";
import CarouselComponent from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
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
