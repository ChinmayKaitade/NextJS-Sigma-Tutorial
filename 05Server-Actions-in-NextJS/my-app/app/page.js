"use client";
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();

  return (
    <div className="p-10 bg-[#313131] h-[100vh] text-white">
      <form
        ref={ref}
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="ml-4 mb-2 border-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="add">Address</label>
          <input
            name="add"
            id="add"
            type="text"
            className="ml-4 mb-2 border-2 text-black"
          />
        </div>

        <div>
          <button className="bg-blue-500 px-4 py-1 mt-5">Submit</button>
        </div>
      </form>
    </div>
  );
}
