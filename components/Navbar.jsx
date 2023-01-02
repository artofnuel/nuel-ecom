import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between my-2 mx-4 relative">
      <p className="text-red-900 text-2xl font-bold tracking-wide">
        <Link href="/">Nuel</Link>
      </p>
      <button type="button">
        <AiOutlineShopping size={20} />
        <span className="absolute top-0 right-[-8px] w-4 h-4 text-[#eee] bg-[#f02d34] text-xs rounded-full text-center font-semibold">
          1
        </span>
      </button>
    </div>
  );
};

export default Navbar;
