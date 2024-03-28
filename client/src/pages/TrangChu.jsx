import React from "react";
import { CiBoxList } from "react-icons/ci";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ProductsList from "../components/ProductsList/ProductsList";
import Customers from "../components/Customers/Customers";
import Post from "../components/Post/Post";


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <ProductsList />
      <Post />
      <Customers/>
      <Footer />
    </div>
  );
}
