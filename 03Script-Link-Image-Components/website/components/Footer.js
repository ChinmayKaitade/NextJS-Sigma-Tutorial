import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around bg-slate-800 text-white py-4">
      <div className="text-center text-xs">
        Copyright © Facebook | All rights reserved
      </div>

      <ul className="flex gap-2 text-sm">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </ul>
    </div>
  );
};

export default Footer;
