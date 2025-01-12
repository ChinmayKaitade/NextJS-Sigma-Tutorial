// "use client";
// import { useState } from "react";
import Navbar from "@/components/Navbar";
import fs from "fs/promises";

const page = () => {
  // const [count, setCount] = useState(0);
  console.log("Hey I'm Harry");
  let a = fs.readFile(".gitignore");
  a.then((e) => console.log(e.toString()));

  return (
    <div className="p-5">
      <Navbar />I am a Component
      {/* {count}  */}
      <br />
      {/* <button
        className="mt-2 bg-blue-600 py-1 px-4 text-white rounded-md text-xl"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button> */}
    </div>
  );
};

export default page;
