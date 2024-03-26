import React from 'react'
import { CiBoxList } from "react-icons/ci";

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer/>
    </div>
  )
}
