"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div>Navbar Component</div>
      <div>Your are inside {pathname}</div>
    </div>
  );
};

export default Navbar;
