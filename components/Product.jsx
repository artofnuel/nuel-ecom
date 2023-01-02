import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <div>
        <Link href={`product/${slug.current}`}>
          <div className="max-w-5xl flex flex-col justify-center items-start gap-2 mt-5 mx-auto">
            <img
              className="rounded-lg w-[300px] h-[300px] object-cover"
              src={urlFor(image && image[0])}
              width={300}
              height={250}
              alt={name}
            />
            <p className="text-md">{name}</p>
            <p className="text-xl font-bold">${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
