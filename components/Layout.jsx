import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="p-[10px]">
      <Head>
        <title>Emmanuel Inua | Nuel Ecom</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="w-full m-auto max-w-[1400px]">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
