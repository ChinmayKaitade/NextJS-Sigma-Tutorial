"use client";
import React from "react";

const error = () => {
  return (
    <div className="text-center p-2">
      <h1 className="text-4xl font-bold">Error in Page</h1>
      <p className="text-lg text-gray-400">Something Went Wrong</p>

      <button className="text-blue-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default error;
