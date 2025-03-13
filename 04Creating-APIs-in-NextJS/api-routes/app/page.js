"use client";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Harry",
      role: "Coder",
    };

    let a = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await a.json();

    console.log(res);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">NextJS API Routes Demo</h1>

      <button
        onClick={handleClick}
        className="px-3 py-1 bg-blue-600 text-white"
      >
        Click
      </button>
    </div>
  );
}
