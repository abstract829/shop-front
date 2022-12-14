import type { NextPage } from "next";
import Head from "next/head";
import ProductList from "../components/Products/ProductList";
import CarouselComponent from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <CarouselComponent />
      <ProductList />
    </div>
  );
};

export default Home;
