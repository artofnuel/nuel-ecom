import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      {/* title */}
      <div className="my-10">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-red-900 font-bold text-4xl">
            Best Selling Products
          </h2>
          <p>Many to choose from!</p>
        </div>
        {/* Product Component */}
        <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center md:items-end gap-3">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
