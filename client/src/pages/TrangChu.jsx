import React from "react";
import { CiBoxList } from "react-icons/ci";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ProductsList from "../components/ProductsList/ProductsList";
import Customers from "../components/Customers/Customers";
import Post from "../components/Post/Post";
import Tabs from "../components/Tabs/Tabs";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Tabs tabCategory="iphone" />
      <Post />
      <Customers />
      <Footer />
    </div>
  );
}
