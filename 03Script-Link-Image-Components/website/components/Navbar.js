import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-800 text-white p-4">
      <div className="logo font-semibold tracking-wider">Facebook</div>

      <ul className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;

export const metadata = {
  title: "Facebook Navbar",
  description:
    "This is navbar facebook and we can connect with the world using facebook",
};
