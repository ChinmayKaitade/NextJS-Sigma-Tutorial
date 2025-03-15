import React from "react";

const page = () => {
  return (
    <div className="h-[85vh] text-black bg-[#dadada] p-12">
      <h1 className="text-6xl my-2">Admin Login</h1>

      <h3 className="text-4xl">Feel free to login as an Admin</h3>

      <p className="text-2xl my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis est
        natus, ipsa officiis fuga odio. Enim, natus eos qui voluptatibus dolorem
        vel odio sint.
      </p>
    </div>
  );
};

export default page;

export async function generateMetaData({ params }) {
  console.log(params);

  return {
    title:
      "AdminLogin Facebook - Connect with friends and the world around you",
  };
}
