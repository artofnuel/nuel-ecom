import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { AiFillAlert } from "react-icons/ai";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-800 text-white">
      <div className="w-full p-4 flex flex-col md:flex-row gap-5 justify-center mx-auto">
        <div className="flex flex-col p-2">
          <p className="text-gray-100 font-bold text-6xl mb-4 pb-4 border-b-4">
            {heroBanner.product}
          </p>
          <h3 className="font-semibold text-3xl mb-2">{heroBanner.midText}</h3>
          <h1 className="font-semibold text-xl flex items-center">
            <AiFillAlert size={25} className="mr-2" />
            {heroBanner.largeText1}
          </h1>
        </div>
        <img
          src={urlFor(heroBanner.image)}
          alt="artwork"
          className="w-full md:w-3/5 mx-auto rounded-xl shadow-2xl hover:scale-[1.02] duration-500 ease-in-out"
        />
        <div className="flex flex-col flex-1 justify-end p-2">
          <Link href={`/product/${heroBanner.product}`}>
            <button
              className="bg-white text-gray-900 font-medium text-lg p-4 w-full rounded-full mb-10 border-b-4 border-gray-900"
              type="button"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="w-full">
            <h5 className="text-lg font-semibold">Description:</h5>
            <p className="text-4xl italic">{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
