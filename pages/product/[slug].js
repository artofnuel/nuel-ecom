import React from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  console.log(image);

  return (
    <div className="p-4">
      {/* container */}
      <div className="flex gap-10 flex-wrap">
        {/* image */}
        <div className="flex flex-col">
          <div className="w-full md:w-[400px] flex">
            <img
              className="w-full mx-auto rounded-xl"
              src={urlFor(image && image[0])}
              alt=""
            />
          </div>
          {/* image carousel */}
          {/* <div className="w-[100px] flex gap-1 my-2">
            {image?.map((item, index) => (
              <img src={urlFor(item)} />
            ))}
          </div> */}
        </div>
        {/* product description */}
        <div className="flex flex-col justify-start items-start font-bold text-xl text-gray-700">
          <h1 className="text-3xl text-red-900 mb-2">{name}</h1>
          {/* review */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-red-900">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className="text-gray-500">(20)</p>
            </div>
            <div>
              <h4 className="font-semibold">Details:</h4>
              <p className="font-normal text-md text-gray-600">{details}</p>
              <p className="font-normal text-md text-gray-600">${price}</p>
            </div>
            {/* quanity */}
            <div className="flex items-center gap-3">
              <h3 className="font-semibold">Quanity:</h3>
              <p className="flex items-center gap-3 font-normal text-gray-500">
                <span onClick="" className="p-2 border-2 border-gray-400">
                  <AiOutlineMinus />
                </span>
                0
                <span onClick="" className="p-2 border-2 border-gray-400">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            {/* add to cart & Buy now BTN */}
            <div className="flex flex-col gap-5">
              <button
                className="w-[230px] p-2 border-2 border-red-900 text-red-900"
                type="button"
              >
                Add to Cart
              </button>
              <button className="w-[230px] p-2 bg-red-900" type="button">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* recommended products */}
      <div className="w-full flex flex-col justify-center items-center my-16">
        <h2 className="text-2xl font-semibold text-gray-700">
          You may also like
        </h2>
        {/* marquee (list of scrolling items) */}
        <div className="relative h-[400px] w-full overflow-x-hidden">
          <div className="flex justify-center gap-4 mt-5">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'product'] {
    slug {
        current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]`;
  const productQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
