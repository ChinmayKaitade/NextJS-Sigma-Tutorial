"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();

  //! Automatically redirects to "/dashboard" after 2 sec after rendering
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/dashboard");
  //   }, 2000);
  // }, []);

  return (
    <div>
      {params.slug}

      <button
        type="button"
        className="bg-blue-600 p-2 ml-2 rounded-md"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default page;
