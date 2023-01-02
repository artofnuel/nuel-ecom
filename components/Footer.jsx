import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center mt-5 py-7 px-2 text-[#324d67]">
      <p className="text-md">&#169; 2023 Nuel All rights reserved</p>
      <p className="flex gap-2">
        <AiFillInstagram size={30} />
        <AiOutlineTwitter size={30} />
      </p>
    </div>
  );
};

export default Footer;
