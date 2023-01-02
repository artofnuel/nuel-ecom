import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    buttonText,
    product,
    image,
    desc,
  },
}) => {
  return (
    <div className="w-full p-8 py-10 flex items-center mx-auto bg-red-900 rounded-xl">
      {/* banner description */}
      <div className="w-full flex justify-between">
        {/* left side */}
        <div className="flex flex-col justify-between md:justify-center gap-4 w-1/2">
          <p className="text-white font-semibold text-lg">{discount}</p>
          <h3 className="text-gray-100 font-bold text-5xl">{largeText1}</h3>
          <h3 className="text-gray-100 font-bold text-5xl">{largeText2}</h3>
          <p className="text-white font-semibold text-lg">{saleTime}</p>
        </div>
        {/* right side */}
        <div className="w-1/2 flex flex-col justify-between md:items-end gap-3">
          <div>
            <p className="text-white font-semibold text-lg mb-3 md:text-right">
              {smallText}
            </p>
            <h3 className="text-gray-100 font-bold text-5xl md:text-right">
              {midText}
            </h3>
            <p className="text-white font-semibold text-lg mb-3 md:text-right">
              {desc}
            </p>
          </div>
          <Link href={`/product/${product}`}>
            <button
              className="p-2 bg-white text-red-900 font-semibold rounded-full px-5"
              type="button"
            >
              {buttonText}
            </button>
          </Link>
          <img
            className="w-full rounded-md md:w-3/5"
            src={urlFor(image)}
            alt={product}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
