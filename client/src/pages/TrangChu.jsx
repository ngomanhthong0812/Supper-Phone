import React from "react";
import { CiBoxList } from "react-icons/ci";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Customers from "../components/Customers/Customers";
import Tabs from "../components/Tabs/Tabs";

import Services from "../components/Services/Services";
import SubBanner from "../components/SubBanner/SubBanner";
import BlockSale from "../components/BlockSale/BlockSale";

import Post from "../components/Post/Post";
import Categories from "../components/Categories/Categories";


export default function TrangChu() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <div className="my_body">
        <Services />
        <SubBanner />
        <BlockSale />
        <Categories/>
        <Tabs tabCategory='iphone' />
        <Post />
        <Customers />
      </div>
      <Footer />
    </div>
  );
}
