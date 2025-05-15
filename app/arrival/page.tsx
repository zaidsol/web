import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Products from '../products/page';
import Footer from '../components/footer';

export default function Arrival() {
  return (
    <div>
      <Head>
        <title>New Arrivals - Shop the Latest Products</title>
        <meta name="description" content="Explore the newest arrivals in our shop. Find the best deals on top products!" />
      </Head>
      <Navbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

