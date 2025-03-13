import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around bg-slate-800 text-white py-4">
      <div className="text-center text-sm">
        Copyright © Facebook | All rights reserved
      </div>

      <ul className="flex gap-2 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Footer;
